**Ingredients**

Angular 4 cli
Node
Gulp

**How to start**

Use git clone to make a copy of the project files into your local system.
Open the project folder in command prompt and run the following commands

    npm install
Now navigate to server folder

    cd server
After the project folder is changed

    npm install
Now change your directory to client folder

    cd ..
    cd client
Again run 

    npm install

Now come to the root folder and run gulp.

    cd ..
    gulp 
Open the project folder/client  in command prompt and run

    ng build --watch

Now edit your angular files to get live updates.

**Lagging Factor**

Auto reload on update in build folder or node js folder. Need to manually reload the browser.

**Leading Factor**

This project folder is ready to upload directly to gcloud.