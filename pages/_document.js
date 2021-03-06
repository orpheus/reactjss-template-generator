import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss'

export default class JssDocument extends Document {
	render() {
		return (
			<Html>
			<Head>
				<style>{`
					* {
					margin: 0;
					padding: 0
					}
					html, body, #__next {
						height: 100%;
					},
					
				`}
				</style>
				<link rel='stylesheet' href='https://highlightjs.org/static/demo/styles/ocean.css'/>
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</Html>
		)
	}
	static async getInitialProps (ctx) {
		const registry = new SheetsRegistry()
		const generateId = createGenerateId()
		const originalRenderPage = ctx.renderPage
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props => (
					<JssProvider registry={registry} generateId={generateId}>
						<App {...props} />
					</JssProvider>
				)
			})
		
		const initialProps = await Document.getInitialProps(ctx)
		
		return {
			...initialProps,
			styles: <>
				{initialProps.styles}
				<style id='server-side-styles'>
					{registry.toString()}
				</style>
			</>
		}
	}
}
