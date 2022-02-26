<!-- PROJECT LOGO -->

<br />

<div align="center">
  <a href="https://github.com/kennyheard/bluegg-cli">
    <img src="https://bluegg.co.uk/images/logo.svg" alt="The Project's Logo" width="160" style="background: white; padding: 1rem; border-radius: 1rem;">
  </a>

  <h3 align="center">Bluegg CLI</h3>
  <p align="center">An awesome CLI tool to make development life at Bluegg a breeze! 🚀</p>

  <div align="center">
    <a href="https://github.com/Bluegg/bluegg-open-source-disclaimer">Open Source Disclaimer</a>
  </div>
</div>

<br />

<!-- GETTING STARTED -->

## Requirements

### Homebrew

Installation of this tool as a Formula using [Homebrew](https://brew.sh) is strongly recommended.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Getting Started

### Installation

Install the Homebrew Formula.

```sh
brew install kennyheard/bluegg/bluegg-cli
```

### Usage

To get started, run the following.

```sh
bluegg --help
```

### Updating

You can update the Formula using Homebrew.

```sh
brew upgrade kennyheard/bluegg/bluegg-cli
```

Then confirm you're running the desired version.

```sh
bluegg --version
```

## For Developers

### Making changes

1. Clone this repo.

```sh
git clone git@github.com:kennyheard/bluegg-cli.git bluegg-cli
```

2. Before committing any changes, _always_ run Prettier at the project's root.

```sh
npm run prettier
```

3. When ready for release, update the `app_version` value in `/library/config.sh`.

4. When all changes are committed, create a Tag and Release in GitHub. Both should follow the standard naming convention, E.G. `v1.2.3`. Use detailed release descriptions - following by the example of earlier releases.

5. Open the Release's Assets, and **make a note** of the "_Source code (tar.gz)_" URL for later. This will be needed when updating the Tap.

6. Finish-up by updating [Bluegg's Homebrew Tap](https://github.com/kennyheard/homebrew-bluegg). Head to the repo for further instructions.

<!-- COMMENT -->

<br />

<h3 align="center">Happy Coding! 👋🏻</h3>

<!-- BLUEGG LOGO -->

<br />

<p align="center">
  <a href="https://bluegg.co.uk" target="_blank">
    <img src="https://bluegg.co.uk/apple-touch-icon.png" alt="Logo" width="40" height="40" style="border-radius: 0.5rem;">
  </a>
</p>
