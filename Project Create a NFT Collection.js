/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// variable "nftMintedHolder" will contain the list of "nftObjects":
const nftMintedHolder = [];
let counter = 0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

/*
nftName: will be Random.
nftFrameShape: Circle, Rhombus(diamond), Triangle, Square.
nftType: Water(blue), Fire(red), Ground(brown), Air(white).(the type will represent the dominant colors in the NFT).
nftTheme: romantic, modern, paradox, fantasy.
*/
function mintNFT (nftName,nftFrameShape,nftType,nftTheme) {
    //NFT object list:
    const nftObjects ={
        //objects
        "name":nftName,
        "frameShape":nftFrameShape,
        "type":nftType,
        "theme":nftTheme
    }
    //will push "nftObjects" contents to "nftMintedHolder".
    nftMintedHolder.push(nftObjects);
    console.log(++counter + ". " + nftObjects.name + " minted \n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    //for function - Will Iterate through "nftMintedHolder".
    let i = 0; //local variable
    console.log("----------LIST OF NFT's-----------");
    for(i ; i < nftMintedHolder.length; i++) {
        console.log("ID: " + Math.random() * 100) + 1; //Adds rarity to the NFT
        console.log("NFT Name: " + nftMintedHolder[i]["name"]);
        console.log("NFT Frame Shape: " + nftMintedHolder[i]["frameShape"]);
        console.log("NFT Type: " + nftMintedHolder[i]["type"]);
        console.log("NFT Theme: " + nftMintedHolder[i]["theme"]);
        console.log("---------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("NFT Total Supply: " + nftMintedHolder.length); //will display the lenght of the array
    console.log("---------------------");
}


// call your functions below this line

//will insert the values containing in the parameter
mintNFT ("A1","Circle","Water","romantic");
mintNFT ("B2","Rhombus","Fire","modern");
mintNFT ("C3","Triangle","Ground","paradox");
mintNFT ("D3","Square","Air","fantasy");

//displays the list of NFT's
listNFTs ();

//displays the total number of NFT's
getTotalSupply ();
