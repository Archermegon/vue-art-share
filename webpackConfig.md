#### 这是一个你目前项目所用的webpack的配置说明
  1. 在这里，你可以轻松找到修改webpack配置的入口，并且在vue.config.js中修改它
  2. 查看你修改的配置是否被引用：请执行npm run inspect,可以在此文件中看到实时修改

####

    {
      mode: 'development',
      context: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template',
      devtool: 'cheap-module-eval-source-map',
      node: {
        setImmediate: false,
        process: 'mock',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
      },
      output: {
        path: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\dist',
        filename: '[name].js',
        publicPath: '',
        globalObject: 'this'
      },
      resolve: {
        alias: {
          '@': 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\src',
          vue$: 'vue/dist/vue.runtime.esm.js'
        },
        extensions: [
          '.js',
          '.jsx',
          '.vue',
          '.json',
          '.ts',
          '.tsx'
        ],
        modules: [
          'node_modules',
          'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules',
          'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\_@vue_cli-service@3.0.5@@vue\\cli-service\\node_modules'
        ]
      },
      resolveLoader: {
        modules: [
          'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\_@vue_cli-plugin-typescript@3.0.5@@vue\\cli-plugin-typescript\\node_modules',
          'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\_@vue_cli-plugin-babel@3.0.5@@vue\\cli-plugin-babel\\node_modules',
          'node_modules',
          'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules',
          'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\_@vue_cli-service@3.0.5@@vue\\cli-service\\node_modules'
        ]
      },
      module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules: [
          /* config.module.rule('vue') */
          {
            test: /\.vue$/,
            use: [
              {
                loader: 'cache-loader',
                options: {
                  cacheDirectory: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\.cache\\vue-loader',
                  cacheIdentifier: '6b18aa29'
                }
              },
              {
                loader: 'vue-loader',
                options: {
                  compilerOptions: {
                    preserveWhitespace: false
                  },
                  cacheDirectory: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\.cache\\vue-loader',
                  cacheIdentifier: '6b18aa29'
                }
              }
            ]
          },
          /* config.module.rule('images') */
          {
            test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 4096,
                  fallback: {
                    loader: 'file-loader',
                    options: {
                      name: 'img/[name].[hash:8].[ext]'
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('svg') */
          {
            test: /\.(svg)(\?.*)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          /* config.module.rule('media') */
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 4096,
                  fallback: {
                    loader: 'file-loader',
                    options: {
                      name: 'media/[name].[hash:8].[ext]'
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('fonts') */
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 4096,
                  fallback: {
                    loader: 'file-loader',
                    options: {
                      name: 'fonts/[name].[hash:8].[ext]'
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('pug') */
          {
            test: /\.pug$/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('css') */
          {
            test: /\.css$/,
            oneOf: [
              /* config.module.rule('css').oneOf('vue-modules') */
              {
                resourceQuery: /module/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('css').oneOf('vue') */
              {
                resourceQuery: /\?vue/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('css').oneOf('normal-modules') */
              {
                test: /\.module\.\w+$/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('css').oneOf('normal') */
              {
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              }
            ]
          },
          /* config.module.rule('postcss') */
          {
            test: /\.p(ost)?css$/,
            oneOf: [
              /* config.module.rule('postcss').oneOf('vue-modules') */
              {
                resourceQuery: /module/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('postcss').oneOf('vue') */
              {
                resourceQuery: /\?vue/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('postcss').oneOf('normal-modules') */
              {
                test: /\.module\.\w+$/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('postcss').oneOf('normal') */
              {
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              }
            ]
          },
          /* config.module.rule('scss') */
          {
            test: /\.scss$/,
            oneOf: [
              /* config.module.rule('scss').oneOf('vue-modules') */
              {
                resourceQuery: /module/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('scss').oneOf('vue') */
              {
                resourceQuery: /\?vue/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('scss').oneOf('normal-modules') */
              {
                test: /\.module\.\w+$/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('scss').oneOf('normal') */
              {
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              }
            ]
          },
          /* config.module.rule('sass') */
          {
            test: /\.sass$/,
            oneOf: [
              /* config.module.rule('sass').oneOf('vue-modules') */
              {
                resourceQuery: /module/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false,
                      indentedSyntax: true
                    }
                  }
                ]
              },
              /* config.module.rule('sass').oneOf('vue') */
              {
                resourceQuery: /\?vue/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false,
                      indentedSyntax: true
                    }
                  }
                ]
              },
              /* config.module.rule('sass').oneOf('normal-modules') */
              {
                test: /\.module\.\w+$/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false,
                      indentedSyntax: true
                    }
                  }
                ]
              },
              /* config.module.rule('sass').oneOf('normal') */
              {
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false,
                      indentedSyntax: true
                    }
                  }
                ]
              }
            ]
          },
          /* config.module.rule('less') */
          {
            test: /\.less$/,
            oneOf: [
              /* config.module.rule('less').oneOf('vue-modules') */
              {
                resourceQuery: /module/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('less').oneOf('vue') */
              {
                resourceQuery: /\?vue/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('less').oneOf('normal-modules') */
              {
                test: /\.module\.\w+$/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              },
              /* config.module.rule('less').oneOf('normal') */
              {
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              }
            ]
          },
          /* config.module.rule('stylus') */
          {
            test: /\.styl(us)?$/,
            oneOf: [
              /* config.module.rule('stylus').oneOf('vue-modules') */
              {
                resourceQuery: /module/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'stylus-loader',
                    options: {
                      sourceMap: false,
                      preferPathResolver: 'webpack'
                    }
                  }
                ]
              },
              /* config.module.rule('stylus').oneOf('vue') */
              {
                resourceQuery: /\?vue/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'stylus-loader',
                    options: {
                      sourceMap: false,
                      preferPathResolver: 'webpack'
                    }
                  }
                ]
              },
              /* config.module.rule('stylus').oneOf('normal-modules') */
              {
                test: /\.module\.\w+$/,
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'stylus-loader',
                    options: {
                      sourceMap: false,
                      preferPathResolver: 'webpack'
                    }
                  }
                ]
              },
              /* config.module.rule('stylus').oneOf('normal') */
              {
                use: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      sourceMap: false,
                      shadowMode: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      importLoaders: 2
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'stylus-loader',
                    options: {
                      sourceMap: false,
                      preferPathResolver: 'webpack'
                    }
                  }
                ]
              }
            ]
          },
          /* config.module.rule('js') */
          {
            test: /\.jsx?$/,
            exclude: [
              function () { /* omitted long function */ }
            ],
            use: [
              {
                loader: 'cache-loader',
                options: {
                  cacheDirectory: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\.cache\\babel-loader',
                  cacheIdentifier: '0494a644'
                }
              },
              {
                loader: 'babel-loader'
              }
            ]
          },
          /* config.module.rule('ts') */
          {
            test: /\.ts$/,
            use: [
              {
                loader: 'cache-loader',
                options: {
                  cacheDirectory: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\.cache\\ts-loader',
                  cacheIdentifier: '6fbdfb6a'
                }
              },
              {
                loader: 'babel-loader'
              },
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  appendTsSuffixTo: [
                    '\\.vue$'
                  ],
                  happyPackMode: false
                }
              }
            ]
          },
          /* config.module.rule('tsx') */
          {
            test: /\.tsx$/,
            use: [
              {
                loader: 'cache-loader',
                options: {
                  cacheDirectory: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\node_modules\\.cache\\ts-loader',
                  cacheIdentifier: '6fbdfb6a'
                }
              },
              {
                loader: 'babel-loader'
              },
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  happyPackMode: false,
                  appendTsxSuffixTo: [
                    '\\.vue$'
                  ]
                }
              }
            ]
          }
        ]
      },
      plugins: [
        /* config.plugin('vue-loader') */
        new VueLoaderPlugin(),
        /* config.plugin('define') */
        new DefinePlugin(
          {
            'process.env': {
              NODE_ENV: '"development"',
              BASE_URL: '""'
            }
          }
        ),
        /* config.plugin('case-sensitive-paths') */
        new CaseSensitivePathsPlugin(),
        /* config.plugin('friendly-errors') */
        new FriendlyErrorsWebpackPlugin(
          {
            additionalTransformers: [
              function () { /* omitted long function */ }
            ],
            additionalFormatters: [
              function () { /* omitted long function */ }
            ]
          }
        ),
        /* config.plugin('hmr') */
        new HotModuleReplacementPlugin(),
        /* config.plugin('no-emit-on-errors') */
        new NoEmitOnErrorsPlugin(),
        /* config.plugin('progress') */
        new ProgressPlugin(),
        /* config.plugin('html') */
        new HtmlWebpackPlugin(
          {
            templateParameters: function () { /* omitted long function */ },
            template: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\public\\index.html'
          }
        ),
        /* config.plugin('preload') */
        new PreloadPlugin(
          {
            rel: 'preload',
            include: 'initial',
            fileBlacklist: [
              /\.map$/,
              /hot-update\.js$/
            ]
          }
        ),
        /* config.plugin('prefetch') */
        new PreloadPlugin(
          {
            rel: 'prefetch',
            include: 'asyncChunks'
          }
        ),
        /* config.plugin('copy') */
        new CopyWebpackPlugin(
          [
            {
              from: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\public',
              to: 'E:\\gitLabItems\\gs-vue-cli\\gs-vue-cli\\templates\\ts-template\\dist',
              toType: 'dir',
              ignore: [
                'index.html',
                '.DS_Store'
              ]
            },
            {
              from: undefined,
              to: 'config.js',
              toType: 'file'
            }
          ]
        ),
        /* config.plugin('fork-ts-checker') */
        new ForkTsCheckerWebpackPlugin(
          {
            vue: true,
            tslint: true,
            formatter: 'codeframe',
            checkSyntacticErrors: false
          }
        ),
        {
          apply: function () { [native code] }
        }
      ],
      entry: {
        app: [
          './src/main.ts'
        ]
      }
    }
