/*
 * This module is where resume creator starts-up
 */

const fs = require("fs");
const path = require("path");
const url = require("url");

const resumeForm = require("./js/resumeform");

//Get the elements
var createNewResumeButton = document.getElementById("create-new-resume");
var startupPage = document.getElementById("startup-page");
var resumeFormPage = document.getElementById("resume-form");

//Magic starts here
function main() {
    $("#create-new-resume").click(function() {
        $("#startup-page").fadeOut("slow", function() {
            $("#resume-form").fadeIn("slow");
        });
    });


    //var source = fs.readFileSync(getBuiltPath()+"/temp.html").toString();
    //var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " + "{{kids.length}} kids:</p>" + "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
    //var template = Handlebars.compile(source);
    //var data = { "myname": "xxxDEEPaggarwal", "hometown": "Somewhere, TX", "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
    //var result = template(data);
    //console.log(result);
    //fs.writeFileSync(getBuiltPath()+"/temp2.html", result);

    //TODO add comments everywhere
    //let win = new BrowserWindow({width: 840, height: 600});
    //let win = new BrowserWindow({width: 800, height: 600, show: false});

    // Or load a local HTML file
    //win.loadURL(`file://${__dirname}/index.html`)
    //Load the index.html of the app
    //win.loadURL(url.format({
    //    pathname: path.join(getBuiltPath(), "temp2.html"),
    //    protocol: "file:",
    //    slashes: true
    //}));

    //win.webContents.on("did-finish-load", () => {
    //    // Use default printing options
    //    win.webContents.printToPDF({pageSize: "A4"}, (error, data) => {
    //        if(error) {
    //            throw error;
    //        }
    //        fs.writeFile("/Users/deep/Desktop/print.pdf", data, (error) => {
    //            if(error) {
    //                throw error;
    //            }
    //            console.log("Write PDF successfully.");
    //        });
    //    });
    //});

    /*
    $("#resume-form .generate-resume").click(function(event) {
        event.preventDefault();
        var fullname = $("#resume-form .name #fullname").val();
        var email = $("#resume-form .email #email").val();
        var phonenumber = $("#resume-form .phone-number #phone-number").val();
        var addressline1 = $("#resume-form .home-address #address-line-1").val();
        var addressline2 = $("#resume-form .home-address #address-line-2").val();
        var city = $("#resume-form .home-address #city").val();
        var state = $("#resume-form .home-address #state").val();
        var zipCode = $("#resume-form .home-address #zip-code").val();
        var githubUrl = $("#resume-form .websites #github-url").val();
        var linkedinUrl = $("#resume-form .websites #linkedin-url").val();
        var twitterUrl = $("#resume-form .websites #twitter-url").val();
        var portfolioUrl = $("#resume-form .websites #portfolio-url").val();

        fullname = "deep Aggarwal";
        email = "deep.uiuc@gmail.com";
        console.log(fullname);
        console.log(email);
        console.log(phonenumber);
        console.log(addressline1);
        console.log(addressline2);
        console.log(city);
        console.log(state);
        console.log(zipCode);
        console.log(githubUrl);
        console.log(linkedinUrl);
        console.log(twitterUrl);
        console.log(portfolioUrl);
    });

    //Default export is a4 paper, portrait, using milimeters for units
    //doc.text("Hello world!", 10, 10);
    //doc.save("a4.pdf");
    */

    //Modal: make a modal that pops-up if there are unsaved changes in the form
}

document.addEventListener("DOMContentLoaded", function(event) {
    //Click event when create new resume is clicked
    createNewResumeButton.addEventListener("click", function() {
        startupPage.classList.add("disappear");
        resumeFormPage.classList.add("appear");
    });

    //TODO
    //When user clicks on upload the previosuly saved template button and open a dialog and let the user select a file
    //The file will be the *.json file saved in ~/Library/Application\ Support/ResumeCreator/<filename.json>

    //TODO
    //

    //Click events to add templates on the resume page
    resumeForm.addEmployment();
    resumeForm.addEducation();
    resumeForm.addProject();
    resumeForm.addSkill();

    //Click events to remove templates on the resume page
    resumeForm.removeEmployment();
    resumeForm.removeEducation();
    resumeForm.removeProject();
    resumeForm.removeSkill();

    //When back button gets clicked go to startup page
    resumeForm.goToStartupPage();

    //When command-S or save button is clicked, save the resume form
    resumeForm.saveForm();

    //Generate resume when resume button is clicked
    resumeForm.generateResume();
});
