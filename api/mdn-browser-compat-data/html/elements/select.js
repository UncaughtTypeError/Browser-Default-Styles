export const data = {
  "html": {
    "elements": {
      "select": {
        "__compat": {
          "mdn_url": "https://developer.mozilla.org/docs/Web/HTML/Element/select",
          "support": {
            "chrome": {
              "version_added": true,
              "notes": "<code>border-radius</code> on <code>&lt;select&gt;</code> elements is ignored unless <code>-webkit-appearance</code> is overridden to an appropriate value."
            },
            "chrome_android": {
              "version_added": true,
              "notes": "<code>border-radius</code> on <code>&lt;select&gt;</code> elements is ignored unless <code>-webkit-appearance</code> is overridden to an appropriate value."
            },
            "edge": {
              "version_added": true
            },
            "firefox": {
              "version_added": "1",
              "notes": "Historically, Firefox has allowed keyboard and mouse events to bubble up from the <code>&lt;option&gt;</code> element to the parent <code>&lt;select&gt;</code> element, although this behavior is inconsistent across many browsers. For better Web compatibility (and for technical reasons), when Firefox is in multi-process mode the <code>&lt;select&gt;</code> element is displayed as a drop-down list. The behavior is unchanged if the <code>&lt;select&gt;</code> is presented inline and it has either the multiple attribute defined or a size attribute set to more than 1. Rather than watching <code>&lt;option&gt;</code> elements for events, you should watch for change events on <code>&lt;select&gt;</code>. See <a href='https://bugzil.la/1090602'>bug 1090602</a> for details."
            },
            "firefox_android": {
              "version_added": "4",
              "notes": "Firefox for Android, by default, sets a <code>background-image</code> gradient on all <code>&lt;select multiple&gt;</code> elements. This can be disabled using <code>background-image: none</code>."
            },
            "ie": {
              "version_added": true
            },
            "opera": {
              "version_added": true
            },
            "opera_android": {
              "version_added": true
            },
            "safari": {
              "version_added": true,
              "notes": "<code>border-radius</code> on <code>&lt;select&gt;</code> elements is ignored unless <code>-webkit-appearance</code> is overridden to an appropriate value."
            },
            "safari_ios": {
              "version_added": true,
              "notes": "<code>border-radius</code> on <code>&lt;select&gt;</code> elements is ignored unless <code>-webkit-appearance</code> is overridden to an appropriate value."
            },
            "samsunginternet_android": {
              "version_added": true
            },
            "webview_android": {
              "version_added": true,
              "notes": [
                "In the Browser app for Android 4.1 (and possibly later versions), there is a bug where the menu indicator triangle on the side of a <code>&lt;select&gt;</code> will not be displayed if a <code>background</code>, <code>border</code>, or <code>border-radius</code> style is applied to the <code>&lt;select&gt;</code>.",
                "<code>border-radius</code> on <code>&lt;select&gt;</code> elements is ignored unless <code>-webkit-appearance</code> is overridden to an appropriate value."
              ]
            }
          },
          "status": {
            "experimental": false,
            "standard_track": true,
            "deprecated": false
          }
        },
        "autofocus": {
          "__compat": {
            "support": {
              "chrome": {
                "version_added": true
              },
              "chrome_android": {
                "version_added": true
              },
              "edge": {
                "version_added": true
              },
              "firefox": {
                "version_added": "1"
              },
              "firefox_android": {
                "version_added": "4"
              },
              "ie": {
                "version_added": true
              },
              "opera": {
                "version_added": true
              },
              "opera_android": {
                "version_added": true
              },
              "safari": {
                "version_added": true
              },
              "safari_ios": {
                "version_added": true
              },
              "samsunginternet_android": {
                "version_added": true
              },
              "webview_android": {
                "version_added": true
              }
            },
            "status": {
              "experimental": false,
              "standard_track": true,
              "deprecated": false
            }
          }
        },
        "disabled": {
          "__compat": {
            "support": {
              "chrome": {
                "version_added": true
              },
              "chrome_android": {
                "version_added": true
              },
              "edge": {
                "version_added": true
              },
              "firefox": {
                "version_added": "1"
              },
              "firefox_android": {
                "version_added": "4"
              },
              "ie": {
                "version_added": true
              },
              "opera": {
                "version_added": true
              },
              "opera_android": {
                "version_added": true
              },
              "safari": {
                "version_added": true
              },
              "safari_ios": {
                "version_added": true
              },
              "samsunginternet_android": {
                "version_added": true
              },
              "webview_android": {
                "version_added": true
              }
            },
            "status": {
              "experimental": false,
              "standard_track": true,
              "deprecated": false
            }
          }
        },
        "form": {
          "__compat": {
            "support": {
              "chrome": {
                "version_added": true
              },
              "chrome_android": {
                "version_added": true
              },
              "edge": {
                "version_added": true
              },
              "firefox": {
                "version_added": "1"
              },
              "firefox_android": {
                "version_added": "4"
              },
              "ie": {
                "version_added": true
              },
              "opera": {
                "version_added": true
              },
              "opera_android": {
                "version_added": true
              },
              "safari": {
                "version_added": true
              },
              "safari_ios": {
                "version_added": true
              },
              "samsunginternet_android": {
                "version_added": true
              },
              "webview_android": {
                "version_added": true
              }
            },
            "status": {
              "experimental": false,
              "standard_track": true,
              "deprecated": false
            }
          }
        },
        "multiple": {
          "__compat": {
            "support": {
              "chrome": {
                "version_added": true
              },
              "chrome_android": {
                "version_added": true
              },
              "edge": {
                "version_added": true
              },
              "firefox": {
                "version_added": "1"
              },
              "firefox_android": {
                "version_added": "4"
              },
              "ie": {
                "version_added": true
              },
              "opera": {
                "version_added": true
              },
              "opera_android": {
                "version_added": true
              },
              "safari": {
                "version_added": true
              },
              "safari_ios": {
                "version_added": true
              },
              "samsunginternet_android": {
                "version_added": true
              },
              "webview_android": {
                "version_added": true
              }
            },
            "status": {
              "experimental": false,
              "standard_track": true,
              "deprecated": false
            }
          }
        },
        "name": {
          "__compat": {
            "support": {
              "chrome": {
                "version_added": true
              },
              "chrome_android": {
                "version_added": true
              },
              "edge": {
                "version_added": true
              },
              "firefox": {
                "version_added": "1"
              },
              "firefox_android": {
                "version_added": "4"
              },
              "ie": {
                "version_added": true
              },
              "opera": {
                "version_added": true
              },
              "opera_android": {
                "version_added": true
              },
              "safari": {
                "version_added": true
              },
              "safari_ios": {
                "version_added": true
              },
              "samsunginternet_android": {
                "version_added": true
              },
              "webview_android": {
                "version_added": true
              }
            },
            "status": {
              "experimental": false,
              "standard_track": true,
              "deprecated": false
            }
          }
        },
        "required": {
          "__compat": {
            "support": {
              "chrome": {
                "version_added": true
              },
              "chrome_android": {
                "version_added": true
              },
              "edge": {
                "version_added": true
              },
              "firefox": {
                "version_added": "4"
              },
              "firefox_android": {
                "version_added": "4"
              },
              "ie": {
                "version_added": "10"
              },
              "opera": {
                "version_added": true
              },
              "opera_android": {
                "version_added": true
              },
              "safari": {
                "version_added": true
              },
              "safari_ios": {
                "version_added": true
              },
              "samsunginternet_android": {
                "version_added": true
              },
              "webview_android": {
                "version_added": true
              }
            },
            "status": {
              "experimental": false,
              "standard_track": true,
              "deprecated": false
            }
          }
        },
        "size": {
          "__compat": {
            "support": {
              "chrome": {
                "version_added": true
              },
              "chrome_android": {
                "version_added": true
              },
              "edge": {
                "version_added": true
              },
              "firefox": {
                "version_added": "1"
              },
              "firefox_android": {
                "version_added": "4"
              },
              "ie": {
                "version_added": true
              },
              "opera": {
                "version_added": true
              },
              "opera_android": {
                "version_added": true
              },
              "safari": {
                "version_added": true
              },
              "safari_ios": {
                "version_added": true
              },
              "samsunginternet_android": {
                "version_added": true
              },
              "webview_android": {
                "version_added": true
              }
            },
            "status": {
              "experimental": false,
              "standard_track": true,
              "deprecated": false
            }
          }
        }
      }
    }
  }
}
