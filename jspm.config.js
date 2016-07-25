SystemJS.config({
    defaultJSExtensions: true,
    paths: {
        "github:": "jspm_packages/github/",
        "npm:": "jspm_packages/npm/"
    },
    browserConfig: {
        "paths": {
            "cratis.client.javascript.core/": "/Source/"
        }
    },
    nodeConfig: {
        "paths": {
            "cratis.client.javascript.core/": "Source/"
        }
    },
    devConfig: {
        "map": {
            "babel-runtime": "npm:babel-runtime@5.8.38",
            "core-js": "npm:core-js@1.2.7",
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
        }
    },
    transpiler: "plugin-babel",
    babelOptions: {
        "optional": [
            "runtime",
            "optimisation.modules.system",
            "es7.decorators"
        ]
    },
    map: {
        "babel": "npm:babel-core@6.11.4"
    },
    packages: {
        "cratis.client.javascript.core": {
            "main": "index.js",
            "format": "cjs",
            "defaultExtension": "js"
        },
        "npm:babel-core@6.11.4": {
            "map": {
                "babel-code-frame": "npm:babel-code-frame@6.11.0",
                "babel-generator": "npm:babel-generator@6.11.4",
                "babel-helpers": "npm:babel-helpers@6.8.0",
                "babel-messages": "npm:babel-messages@6.8.0",
                "babel-template": "npm:babel-template@6.9.0",
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "babel-register": "npm:babel-register@6.11.5",
                "babel-traverse": "npm:babel-traverse@6.11.4",
                "babel-types": "npm:babel-types@6.11.1",
                "babylon": "npm:babylon@6.8.4",
                "convert-source-map": "npm:convert-source-map@1.3.0",
                "debug": "npm:debug@2.2.0",
                "json5": "npm:json5@0.4.0",
                "lodash": "npm:lodash@4.13.1",
                "minimatch": "npm:minimatch@3.0.2",
                "path-exists": "npm:path-exists@1.0.0",
                "path-is-absolute": "npm:path-is-absolute@1.0.0",
                "private": "npm:private@0.1.6",
                "shebang-regex": "npm:shebang-regex@1.0.0",
                "slash": "npm:slash@1.0.0",
                "source-map": "npm:source-map@0.5.6"
            }
        },
        "npm:babel-runtime@6.9.2": {
            "map": {
                "core-js": "npm:core-js@2.4.1",
                "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
            }
        },
        "npm:babel-code-frame@6.11.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "chalk": "npm:chalk@1.1.3",
                "esutils": "npm:esutils@2.0.2",
                "js-tokens": "npm:js-tokens@2.0.0"
            }
        },
        "npm:babel-helpers@6.8.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "babel-template": "npm:babel-template@6.9.0"
            }
        },
        "npm:babel-template@6.9.0": {
            "map": {
                "babylon": "npm:babylon@6.8.4",
                "babel-traverse": "npm:babel-traverse@6.11.4",
                "babel-types": "npm:babel-types@6.11.1",
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "lodash": "npm:lodash@4.13.1"
            }
        },
        "npm:babel-messages@6.8.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2"
            }
        },
        "npm:babylon@6.8.4": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2"
            }
        },
        "npm:babel-types@6.11.1": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "babel-traverse": "npm:babel-traverse@6.11.4",
                "esutils": "npm:esutils@2.0.2",
                "lodash": "npm:lodash@4.13.1",
                "to-fast-properties": "npm:to-fast-properties@1.0.2"
            }
        },
        "npm:babel-traverse@6.11.4": {
            "map": {
                "babel-code-frame": "npm:babel-code-frame@6.11.0",
                "babel-messages": "npm:babel-messages@6.8.0",
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "babel-types": "npm:babel-types@6.11.1",
                "babylon": "npm:babylon@6.8.4",
                "debug": "npm:debug@2.2.0",
                "globals": "npm:globals@8.18.0",
                "invariant": "npm:invariant@2.2.1",
                "lodash": "npm:lodash@4.13.1"
            }
        },
        "npm:babel-register@6.11.5": {
            "map": {
                "babel-core": "npm:babel-core@6.11.4",
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "core-js": "npm:core-js@2.4.1",
                "home-or-tmp": "npm:home-or-tmp@1.0.0",
                "lodash": "npm:lodash@4.13.1",
                "mkdirp": "npm:mkdirp@0.5.1",
                "path-exists": "npm:path-exists@1.0.0",
                "source-map-support": "npm:source-map-support@0.2.10"
            }
        },
        "npm:debug@2.2.0": {
            "map": {
                "ms": "npm:ms@0.7.1"
            }
        },
        "npm:babel-generator@6.11.4": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "babel-types": "npm:babel-types@6.11.1",
                "detect-indent": "npm:detect-indent@3.0.1",
                "lodash": "npm:lodash@4.13.1",
                "source-map": "npm:source-map@0.5.6",
                "babel-messages": "npm:babel-messages@6.8.0"
            }
        },
        "npm:minimatch@3.0.2": {
            "map": {
                "brace-expansion": "npm:brace-expansion@1.1.6"
            }
        },
        "npm:invariant@2.2.1": {
            "map": {
                "loose-envify": "npm:loose-envify@1.2.0"
            }
        },
        "npm:chalk@1.1.3": {
            "map": {
                "ansi-styles": "npm:ansi-styles@2.2.1",
                "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                "has-ansi": "npm:has-ansi@2.0.0",
                "strip-ansi": "npm:strip-ansi@3.0.1",
                "supports-color": "npm:supports-color@2.0.0"
            }
        },
        "npm:home-or-tmp@1.0.0": {
            "map": {
                "os-tmpdir": "npm:os-tmpdir@1.0.1",
                "user-home": "npm:user-home@1.1.1"
            }
        },
        "npm:source-map-support@0.2.10": {
            "map": {
                "source-map": "npm:source-map@0.1.32"
            }
        },
        "npm:mkdirp@0.5.1": {
            "map": {
                "minimist": "npm:minimist@0.0.8"
            }
        },
        "npm:detect-indent@3.0.1": {
            "map": {
                "get-stdin": "npm:get-stdin@4.0.1",
                "minimist": "npm:minimist@1.2.0",
                "repeating": "npm:repeating@1.1.3"
            }
        },
        "npm:brace-expansion@1.1.6": {
            "map": {
                "balanced-match": "npm:balanced-match@0.4.2",
                "concat-map": "npm:concat-map@0.0.1"
            }
        },
        "npm:source-map@0.1.32": {
            "map": {
                "amdefine": "npm:amdefine@1.0.0"
            }
        },
        "npm:loose-envify@1.2.0": {
            "map": {
                "js-tokens": "npm:js-tokens@1.0.3"
            }
        },
        "npm:strip-ansi@3.0.1": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:has-ansi@2.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:repeating@1.1.3": {
            "map": {
                "is-finite": "npm:is-finite@1.0.1"
            }
        },
        "npm:is-finite@1.0.1": {
            "map": {
                "number-is-nan": "npm:number-is-nan@1.0.0"
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "http": "github:jspm/nodelibs-http@0.2.0-alpha",
        "module": "github:jspm/nodelibs-module@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "sinon": "npm:sinon@1.17.4",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
    },
    packages: {
       
        "npm:core-util-is@1.0.2": {
            "map": {}
        },
        "npm:formatio@1.1.1": {
            "map": {
                "samsam": "npm:samsam@1.1.2"
            }
        },
        "npm:inherits@2.0.1": {
            "map": {}
        },
        "npm:punycode@1.3.2": {
            "map": {}
        },
        "npm:sinon@1.17.4": {
            "map": {
                "formatio": "npm:formatio@1.1.1",
                "lolex": "npm:lolex@1.3.2",
                "samsam": "npm:samsam@1.1.2",
                "util": "npm:util@0.10.3"
            }
        },
        "npm:string_decoder@0.10.31": {
            "map": {}
        },
        "npm:util@0.10.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "github:jspm/nodelibs-http@0.2.0-alpha": {
            "map": {
                "http-browserify": "npm:stream-http@2.3.0"
            }
        },
        "npm:stream-http@2.3.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.1.4",
                "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
                "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                "xtend": "npm:xtend@4.0.1"
            }
        },
        "npm:readable-stream@2.1.4": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@1.0.0",
                "string_decoder": "npm:string_decoder@0.10.31",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "buffer-shims": "npm:buffer-shims@1.0.0",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.7.1"
            }
        },
        "npm:buffer@4.7.1": {
            "map": {
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0",
                "base64-js": "npm:base64-js@1.1.2"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.1.4"
            }
        },
        "github:jspm/nodelibs-url@0.2.0-alpha": {
            "map": {
                "url-browserify": "npm:url@0.11.0"
            }
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        }
    }
});