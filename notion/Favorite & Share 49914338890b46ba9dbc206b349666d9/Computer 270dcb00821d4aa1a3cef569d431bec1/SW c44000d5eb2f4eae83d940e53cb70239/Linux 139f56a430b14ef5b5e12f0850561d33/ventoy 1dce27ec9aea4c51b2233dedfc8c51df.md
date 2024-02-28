# ventoy

# 

. multi boot loader from iso

. [https://www.ventoy.net/en/download.html](https://www.ventoy.net/en/download.html)

. auto run config, after install the ventoy setup, can add a json file for boot auto run. no wait user input choise.

in   /ventoy/ventoy.json

```
{
    "control": [
        { "VTOY_MENU_TIMEOUT": "3" }
    ]
}

```

ref:[https://www.ventoy.net/en/plugin_control.html](https://www.ventoy.net/en/plugin_control.html)