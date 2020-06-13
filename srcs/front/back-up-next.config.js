// const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withSASS = require('@zeit/next-sass');
const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");

module.exports = withCSS(
	withSASS({
		webpack(config, options) {
			config.plugins.push(new CKEditorWebpackPlugin({
				addMainLanguageTranslationsToAllAssets: true,
				buildAllTranslationsToSeparateFiles: true,
			}));

			config.module.rules.forEach(function(rule, index, array) {
				if (rule.test) {
					const test = rule.test.toString();
					if (test.includes("css")) {
						array[index] = {
							...rule,
							exclude: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/
						};
					} else if (test.includes("svg")) {
						array[index] = {
							...rule,
							exclude: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/
						};
					}
				}
			});
//
			config.module.rules.push({
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
				use: [ 'raw-loader' ]
			})

			// config.module.rules.push({
			// 	test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
			// 	use: {
			// 		loader: 'style-loader',
			// 		options: {
			// 			injectType: 'singletonStyleTag'
			// 		}
			// 	}
			// 	// [
			// 		// {
			// 		// 	loader: 'style-loader',
			// 		// 	options: {
			// 		// 	singleton: true
			// 		// 	}
			// 		// },
			// 		// {
			// 		// 	loader: 'postcss-loader',
			// 		// 	options: styles.getPostCssConfig( {
			// 		// 	themeImporter: {
			// 		// 		themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
			// 		// 	},
			// 		// 	minify: true
			// 		// 	} )
			// 		// }
			// 	// ]
			// })
//
			config.module.rules.push({
				test: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
				use: ["raw-loader"]
			});

			config.module.rules.push({
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: '[name].[ext]'
					}
				},
			})

			config.module.rules.push({
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
				use: [ 'raw-loader' ]
			})

			config.module.rules.push({
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
				use: [
				  {
					loader: 'style-loader',
					options: {
						injectType: 'singletonStyleTag'
					}
				  },
				  {
					loader: 'postcss-loader',
					options: styles.getPostCssConfig( {
					  themeImporter: {
						themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
					  },
					  minify: true
					} )
				  }
				]
			});

			return config;
		}
	})
);
