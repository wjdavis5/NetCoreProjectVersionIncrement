# NetCoreProjectVersionIncrement
A nodejs script to modify the project.json file with the new version information from the Appveyor CI system.

Here is the prebuild script we use in Appveyor to run this:

```
npm install jsonfile
node version.js
dotnet restore
```
