with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "nolanrigodev";

  buildInputs = [
    nodejs-16_x
    python3
  ];

  GATSBY_TELEMETRY_DISABLED = 1;
}
