with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "nolanrigodev";

  buildInputs = [
    gnumake
    nodejs-16_x
    python3
  ];

  GATSBY_TELEMETRY_DISABLED = 1;
}
