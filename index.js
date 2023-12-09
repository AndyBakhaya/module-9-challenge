const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown= require("./utils/generateMarkdown")


const questions = [
    {   
        name: "Title",
        message: "Enter the title of your Project."
    },
    {
        name: "Description",
        message: "Enter a description of your Project",
        type: "editor",
    },
    {
        name: "Installation",
        message: "Enter the Installation Process of your Project",
        type: "editor",
    },
    {
        name: "Usage",
        message: "Enter the Usage Information of your Project",
        type: "editor",
    },
    {
        name: "Contributing",
        message: "Enter the Information of any Contributors of your Project ",
        type: "editor",
    },
    {
        name: "Tests",
        message: "Enter the Information to run Tests of your Project",
        type: "editor",
    },
    {
        name: "License",
        message: "Please select a License",
        
    },
    {
        name: "Email",
        message: "Enter your Email Address"
    },
    {
        name: "Github",
        message: "Enter your Github Username"
    },
]

init();