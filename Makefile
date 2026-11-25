NOTES ?= $(HOME)/Documents/notes
STAGE ?= $(HOME)/.cache/wiki-content

stage:
	rm -rf $(STAGE)
	mkdir -p $(STAGE)/projects
	cp -r content/. $(STAGE)/
	cp -r $(NOTES)/projects/. $(STAGE)/projects/

build: stage
	npx quartz build -d $(STAGE)

serve: stage
	npx quartz build -d $(STAGE) --serve

.PHONY: stage build serve
