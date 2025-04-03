cd "/Users/vidolan/Desktop/Screen Class/p5mirror-Vi/downloads/../p5projects"
#
echo unzip 1 "ims02-Vi-ugJpz97jW"
rm -rf "./ims02-Vi-ugJpz97jW"
mkdir "./ims02-Vi-ugJpz97jW"
pushd "./ims02-Vi-ugJpz97jW" > /dev/null
unzip -q "../../downloads/zips/ims02-Vi-ugJpz97jW"
popd > /dev/null
#
echo unzip 2 "localStorage v1 copy-zVaxqBw3G"
rm -rf "./localStorage v1 copy-zVaxqBw3G"
mkdir "./localStorage v1 copy-zVaxqBw3G"
pushd "./localStorage v1 copy-zVaxqBw3G" > /dev/null
unzip -q "../../downloads/zips/localStorage v1 copy-zVaxqBw3G"
popd > /dev/null
#
echo unzip 3 "GenerativeNoise copy-iB9-joFWU"
rm -rf "./GenerativeNoise copy-iB9-joFWU"
mkdir "./GenerativeNoise copy-iB9-joFWU"
pushd "./GenerativeNoise copy-iB9-joFWU" > /dev/null
unzip -q "../../downloads/zips/GenerativeNoise copy-iB9-joFWU"
popd > /dev/null
#
echo unzip 4 "GenerativeNoise-79veR7EAq"
rm -rf "./GenerativeNoise-79veR7EAq"
mkdir "./GenerativeNoise-79veR7EAq"
pushd "./GenerativeNoise-79veR7EAq" > /dev/null
unzip -q "../../downloads/zips/GenerativeNoise-79veR7EAq"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi