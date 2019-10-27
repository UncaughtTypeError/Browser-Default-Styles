export const data = {
  "html": {
    "elements": {
      "input": {
        "input-range": {
          "__compat": {
            "mdn_url": "https://developer.mozilla.org/docs/Web/HTML/Element/input/range",
            "description": "<code>type=\"range\"</code>",
            "support": {
              "chrome": {
                "version_added": "4"
              },
              "chrome_android": {
                "version_added": "57"
              },
              "edge": {
                "version_added": "12"
              },
              "firefox": {
                "version_added": "23"
              },
              "firefox_android": {
                "version_added": "52"
              },
              "ie": {
                "version_added": "10"
              },
              "opera": {
                "version_added": "11"
              },
              "opera_android": {
                "version_added": true
              },
              "safari": {
                "version_added": "3.1"
              },
              "safari_ios": {
                "version_added": "5.1"
              },
              "webview_android": [
                {
                  "version_added": "4.4"
                },
                {
                  "version_added": "2",
                  "version_removed": "4.4",
                  "partial_implementation": true,
                  "notes": "Pre-Chromium Android WebView recognizes the <code>range</code> type, but doesn't implement a range-specific control."
                }
              ]
            },
            "status": {
              "experimental": false,
              "standard_track": true,
              "deprecated": false
            }
          },
          "tick_marks": {
            "__compat": {
              "description": "Tick mark support",
              "support": {
                "chrome": {
                  "version_added": true
                },
                "chrome_android": {
                  "version_added": true
                },
                "edge": {
                  "version_added": null
                },
                "firefox": {
                  "version_added": false,
                  "notes": "See <a href='https://bugzil.la/841942'>bug 841942</a>."
                },
                "firefox_android": {
                  "version_added": false,
                  "notes": "See <a href='https://bugzil.la/841942'>bug 841942</a>."
                },
                "ie": {
                  "version_added": null
                },
                "opera": {
                  "version_added": true
                },
                "opera_android": {
                  "version_added": true
                },
                "safari": {
                  "version_added": false
                },
                "safari_ios": {
                  "version_added": false
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
          "vertical_orientation": {
            "__compat": {
              "description": "Vertically-oriented slider support",
              "support": {
                "chrome": {
                  "version_added": true,
                  "notes": "The slider can be oriented vertically by setting the non-standard <code>-webkit-appearance: slider-vertical</code> style on the <code>input</code> element. You shouldn't use this, since it's proprietary, unless you include appropriate fallbacks for users of other browsers."
                },
                "chrome_android": {
                  "version_added": true,
                  "notes": "The slider can be oriented vertically by setting the non-standard <code>-webkit-appearance: slider-vertical</code> style on the <code>input</code> element. You shouldn't use this, since it's proprietary, unless you include appropriate fallbacks for users of other browsers."
                },
                "edge": {
                  "version_added": null
                },
                "firefox": {
                  "version_added": false,
                  "notes": "See <a href='https://bugzil.la/840820'>bug 840820</a> and <a href='https://bugzil.la/981916'>bug 981916</a>."
                },
                "firefox_android": {
                  "version_added": false,
                  "notes": "See <a href='https://bugzil.la/840820'>bug 840820</a> and <a href='https://bugzil.la/981916'>bug 981916</a>."
                },
                "ie": {
                  "version_added": "10",
                  "notes": "The slider can be oriented vertically by setting the <code>writing-mode: bt-lr</code> style on the <code>input</code> element."
                },
                "opera": {
                  "version_added": true,
                  "notes": "The slider can be oriented vertically by setting the non-standard <code>-webkit-appearance: slider-vertical</code> style on the <code>input</code> element. You shouldn't use this, since it's proprietary, unless you include appropriate fallbacks for users of other browsers."
                },
                "opera_android": {
                  "version_added": true,
                  "notes": "The slider can be oriented vertically by setting the non-standard <code>-webkit-appearance: slider-vertical</code> style on the <code>input</code> element. You shouldn't use this, since it's proprietary, unless you include appropriate fallbacks for users of other browsers."
                },
                "safari": {
                  "version_added": true,
                  "notes": "The slider can be oriented vertically by setting the non-standard <code>-webkit-appearance: slider-vertical</code> style on the <code>input</code> element. You shouldn't use this, since it's proprietary, unless you include appropriate fallbacks for users of other browsers."
                },
                "safari_ios": {
                  "version_added": true,
                  "notes": "The slider can be oriented vertically by setting the non-standard <code>-webkit-appearance: slider-vertical</code> style on the <code>input</code> element. You shouldn't use this, since it's proprietary, unless you include appropriate fallbacks for users of other browsers."
                },
                "webview_android": {
                  "version_added": true,
                  "notes": "The slider can be oriented vertically by setting the non-standard <code>-webkit-appearance: slider-vertical</code> style on the <code>input</code> element. You shouldn't use this, since it's proprietary, unless you include appropriate fallbacks for users of other browsers."
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
}
