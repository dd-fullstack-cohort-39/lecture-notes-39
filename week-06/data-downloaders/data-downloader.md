# Data downloaders & Seed Data

## High level overview
* You need some way to get data into your database so that your application can use it.
* If you are using somebody else's data (i.e. an API) you will use a **data downloader** to copy data to your database
* If you are planning on using user-contributed data, you need to create your own **seed data** to initially populate your database

## Creating a data downloader or seed data

### API = Application Programming Interface
- A software intermediary that allows two applications to communicate with one another and transfer data
- APIs define the classes, methods, functions and variables your application needs to carry out
  a desired task

### What?
- **Data downloader**: a process built to ping an API to grab and format necessary information for an application.
- **Data seeder**: usually a file built to automate the initial seeding of a database with information necessary for testing

### Why?
- **Data downloader**: you don’t have to store massive amounts of moving (and unnecessary) data for your application.
- **Data seeder**: Nobody wants to waste time manually building objects for your database for testing.

### Necessary components:
- API key
- Endpoint URL
- Somewhere to display or store the output
    - [browser, database, insomnia (which is kinda basically like a browser)]

## Example
``` typescript
import axios from 'axios';
import { v1 as uuid } from 'uuid';
import {Tweet} from '../interfaces/Tweet';
import {insertTweet} from '../tweet/insertTweet';
import {setHash} from '../auth.utils';
import {insertProfile} from '../profile/insertProfile';
import {Profile} from '../interfaces/Profile';

function ddcTweetDataDownloader() : Promise<any> {
	async function main() {
		try{
			await downloadUsers()

		} catch (error) {
			console.error(error)
		}

	}

	return main()

	async function downloadUsers() {
		try {
	
			const {data} = await axios("https://api.twitter.com/tweets")
		
						//A fake profile must be created to own the tweets being imported for the data downloader
						const profileHash = await setHash("ILikeFakePasswordsWithNoSpaces");
						const profile: Profile = {
							profileId: uuid(),
							profileAtHandle: "mxFakeAccount",
							profileActivationToken: null,
							profileAvatarUrl: "http://www.fillmurray.com/150/150",
							profileEmail: "mxFakeAccount@fake-acounts.rus",
							profileHash,
							profilePhone: "505-866-5309"
						}
						 console.log(await insertProfile(profile))
						for (let result of data) {

							const {tweetContent, tweetDate} = result
							const tweet: Tweet = {
								tweetId: null,
								tweetProfileId: profile.profileId as string,
								tweetContent,
								tweetDate
							}
							console.log(await insertTweet(tweet))
						}

			

		} catch (error) {
			throw error
		}
	}
}

ddcTweetDataDownloader()
	.then(finished =>{
		console.log("finished")
	}).catch(error => {
	console.error(error)
})
```

## Instructions for running the file
1. Put the file into the `utils/dataDownLoader` folder
1. check to make sure the containers are running `docker ps`
2. access the node container `docker container exec -it containerName|containerId /bin/bash`
3. cd into the directory inside the droplet `cd utils/dataDownLoader`
4. Compile the dataDownloder `npx tsc dataDownloaderFoo.ts`
5. Execute the DataDownloader `node dataDownloaderFoo.js`

## Helpful Extra Stuff:
[JSON Formatter](https://jsonformatter.org/json-pretty-print), [Chrome JSON extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en), [Snapchat](https://developers.snapchat.com/api/docs/#get-all-organizations), [Instagram](https://www.instagram.com/developer/endpoints/)