__dirname

It will return the directory name of the current module. I like to remember it as it returns the absolute directory path of the script or js file (the one which we run using node command. For example: node app.js, in this case the absolute directory path of app.js). It will return the directory path as a string.

__filename

It will return the file name of the current module. I like to remember it as it returns the absolute file path of the script or js file which we are trying to run using node command. The main difference of __filename and __dirname is that __filename will return the file name along with the directory path which is usually not the case for __dirname.

For example if we run the command , "node app.js", __dirname will give the absolute path of the directory where app.js resides in and __filename will give the absolute path of the directory along with the filename.

process.cwd()

According to the official documentation process.cwd() method returns the current working directory of Node.js process. This basically means that it will return the directory path from where node command is being executed. If we run the node command from the same directory where starting script resides in , then process.cwd() and __dirname will return the same value . If we run the node command from different directory and the script resides in different directory then both of them will return different value.