# wiki

Source for [wiki.georgesleen.com](https://wiki.georgesleen.com), built with [Quartz](https://quartz.jzhao.xyz).
Pages come from `projects/` in the private notes vault; `content/` holds the pages that live here.

```bash
make serve    # build and preview locally (Node 22)
```

The `Deploy` workflow pulls the vault with the `NOTES_DEPLOY_KEY` deploy key and publishes to GitHub Pages every 30 minutes.
