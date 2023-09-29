with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "nolan.rigo.dev";
  buildInputs = [
    bun
    just
  ];
}

