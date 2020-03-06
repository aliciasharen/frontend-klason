module.exports = {
    runtimeCompiler:true
}
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
	    proxy: 'http://127.0.0.1:8000'
	}
}