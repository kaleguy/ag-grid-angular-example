(function (global) {
    System.config({
            defaultJSExtensions: true,
            map: {
                // angular bundles
                '@angular/core': 'node_modules/@angular/core/bundles/core.umd.min.js',
                '@angular/common': 'node_modules/@angular/common/bundles/common.umd.min.js',
                '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.min.js',
                '@angular/common/http': 'node_modules/@angular/common/bundles/common-http.umd.js',
                '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
                '@angular/http': 'node_modules/@angular/http/bundles/http.umd.min.js',
                'tslib': 'node_modules/tslib/tslib.js',
                // other libraries
                'rxjs': 'node_modules/rxjs',
                'lodash': 'node_modules/lodash',
                // ag libraries
                'ag-grid-angular': 'node_modules/ag-grid-angular',
                'ag-grid': 'node_modules/ag-grid',
                'ag-grid-enterprise': 'node_modules/ag-grid-enterprise'
            },
            packages: {
                'ag-grid': {
                    main: 'main.js'
                },
                'ag-grid-enterprise': {
                    main: 'main.js'
                },
                'lodash': {
                    main: 'index.js',
                    defaultExtension: 'js'
                }

            }
        }
    );
})(this);