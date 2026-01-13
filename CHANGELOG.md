# Changelog

## [0.3.0](https://github.com/qbead/bloch-sphere/compare/v0.2.0...v0.3.0) (2026-01-13)


### Features

* .clone and .copy methods for operator and complex ([423f258](https://github.com/qbead/bloch-sphere/commit/423f258fa588d4b59ac45cda3e5da17e186c26c0))
* animation refactor uses promises ([d38799f](https://github.com/qbead/bloch-sphere/commit/d38799f52cf989900251d9fa517936f0f2d77657))


### Bug Fixes

* [#4](https://github.com/qbead/bloch-sphere/issues/4) getRotationArc not generalized correctly ([a241437](https://github.com/qbead/bloch-sphere/commit/a2414375ed0c959d3375661a0348d03cf2735dff))
* angle normalization and consistency in interpolation ([d587e66](https://github.com/qbead/bloch-sphere/commit/d587e66d227267b87e347efb6cc9e50ee138b549))
* copy vector/operator instead of owning supplied by .set ([317a7c6](https://github.com/qbead/bloch-sphere/commit/317a7c6a3f40447b3fcec97568f81cecf91f6984))
* getRotationArc modified supplied vector ([b461ea5](https://github.com/qbead/bloch-sphere/commit/b461ea5ef94d64ad75c13a2f65ac11e9a72ed73a))
* handle edge cases for arbitrary rotation display ([bad29c2](https://github.com/qbead/bloch-sphere/commit/bad29c21952a109a2ea2f5d26e1e9e462bbd74b0))
* operator display incorrectly oriented for some operators ([ab5ccac](https://github.com/qbead/bloch-sphere/commit/ab5ccac5522ab7a3b2c1a19a09c22e05ecb9ac11))
* set animation to end state on cancel ([1e8218b](https://github.com/qbead/bloch-sphere/commit/1e8218b41af24b2459ffae1c6af47733a3af3e79))

## [0.2.0](https://github.com/qbead/bloch-sphere/compare/v0.1.0...v0.2.0) (2025-09-03)


### Features

* add camera api ([9f96cda](https://github.com/qbead/bloch-sphere/commit/9f96cda8c564f3141a5936082982c8214312f724))
* add features to enable or disable user interactivity ([e4ab188](https://github.com/qbead/bloch-sphere/commit/e4ab1887bf9f529a9e3e76469cf55377bd63b2d2))
* add support for initial camera state in constructor ([ff41d0d](https://github.com/qbead/bloch-sphere/commit/ff41d0d3c8e8615f05f1734f0f66165ead7bb1d7))


### Bug Fixes

* expose options type ([e37b1fc](https://github.com/qbead/bloch-sphere/commit/e37b1fcb2ed89e54a8c0c9502c7a7bda2ada81b0))
* make three a peer dependency ([7e6d226](https://github.com/qbead/bloch-sphere/commit/7e6d226bd0b97e11368e681fb2f011b966df83c5))
* re [#2](https://github.com/qbead/bloch-sphere/issues/2) add position relative to containers ([7009db1](https://github.com/qbead/bloch-sphere/commit/7009db11140d910d66286c8454abec518ee9e78e))
* regression bug. camera was too close on animation ([138f55a](https://github.com/qbead/bloch-sphere/commit/138f55afbc9001cc67175f9b48da8956750b16f0))
* remove redundant default distance property ([43ff117](https://github.com/qbead/bloch-sphere/commit/43ff117562f0e258056d13fdc5e27e4c11676885))
* update default background color ([503b941](https://github.com/qbead/bloch-sphere/commit/503b94151015cd0c235140df15b53f88fe9ac9b8))

## 0.1.0 (2025-03-31)


### ⚠ BREAKING CHANGES

* BlochVector now extends three.vector3

### Features

* add label to operator display ([8444382](https://github.com/qbead/bloch-sphere/commit/8444382489427b0b737ae7d7b373f14318ff3288))
* added points, and paths ([342cf7f](https://github.com/qbead/bloch-sphere/commit/342cf7f24737a3e7aef7fb0bea3516526993530b))
* allow access to qubit display child components ([543d7b6](https://github.com/qbead/bloch-sphere/commit/543d7b6613a89eb1fedd42a87fc67d2b6d2a6115))
* font size customization ([84c12f2](https://github.com/qbead/bloch-sphere/commit/84c12f20e2abb1794cc65d0a26a3e6db9d49faaf))
* highlight regions with region display component ([4051baa](https://github.com/qbead/bloch-sphere/commit/4051baadf7335e88e01b7086cad7a4cda4b17240))
* place axes in a group ([f1014d1](https://github.com/qbead/bloch-sphere/commit/f1014d125e56750feec714f1dffea4d34ef8bf52))


### Bug Fixes

* arc drawing didn't work for all axes ([dd5ee34](https://github.com/qbead/bloch-sphere/commit/dd5ee34fc186ebbe4c0739190c0f199be297b4fa))
* BlochVector now extends three.vector3 ([3968b29](https://github.com/qbead/bloch-sphere/commit/3968b29f94331344a32bd8ef9c87ac132ddeccc3))
* color setting created new materials ([87745ae](https://github.com/qbead/bloch-sphere/commit/87745ae5a377b10f1f8508a1f9dbc000a76cc584))
* default color adjustments ([562c5c4](https://github.com/qbead/bloch-sphere/commit/562c5c4cccbfd1a5a47c2e6eb4ee17256bb8e856))
* incorrect usage of generator ([e12c42f](https://github.com/qbead/bloch-sphere/commit/e12c42f573327d0937c4194a7d1496a929f783b6))
* operator display rotation direction ([104e956](https://github.com/qbead/bloch-sphere/commit/104e956b3a456614c823ca17b7a79a0479ec2216))
* types for three color representation ([3aad800](https://github.com/qbead/bloch-sphere/commit/3aad800e13c69020a5c87954b3fd61161bb8f9c7))


### Miscellaneous Chores

* release 0.1.0 ([ef747d2](https://github.com/qbead/bloch-sphere/commit/ef747d26195ca32342b33276dee3a5e1d0add89e))
