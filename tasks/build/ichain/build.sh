#!/bin/sh

mkdir --parents $GOPATH/src/github.com/icheckteam
cd $GOPATH/src/github.com/icheckteam
git clone https://github.com/icheckteam/ichain
cd ichain
git checkout $COMMIT
make get_tools
export GOOS

for GOOS in darwin linux windows; do
  echo Building Ichain for $GOOS platform.
  make get_vendor_deps
  make install
done

mkdir --parents $TARGET/linux_amd64
cp /go/bin/ichain* $TARGET/linux_amd64/
cp --recursive /go/bin/*_amd64 $TARGET/