with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "env";
  buildInputs = [
    nodejs_20
    just
  ];
}

