
    var counter1 = 1;
    var counter2 = 1;
    var counter3 = 1;
    var counter4 = 1;
    var counter5 = 1;
    var counter6 = 1;
    var counter7 = 1;
    var counter8 = 1;
    var counter9 = 1;
    var counter10 = 1;
    var updatedProfilesCategoriesArray = Object.assign({}, fullArrayObject);
        // state.allProfiles_JSONArray = updatedProfilesCategoriesArray;
        console.log("clickkkkked");


    var allCategoriesSelected = true;
    var meatSelected = false;
    var coffeeTeaSelected = false;
    var plasticsSelected = false;
    var fruitSelected = false;
    var bakedSelected = false;
    var spicesSelected = false;
    var frozenSelected = false;
    var drinksSelected = false;

    var selectedCategories =  0;

    document.getElementById("allCategories").addEventListener("click", highlightCategoryAndFilterCards1);

    function highlightCategoryAndFilterCards1()
    {
        if (selectedCategories ==  0)
        {
            document.getElementById("check01").disabled = true;
            allCategoriesSelected = true;
             
            // updatedProfilesCategoriesArray = Object.assign({}, fullArrayObject);
            // updateProfilesArray(updatedProfilesCategoriesArray);
            // state.allProfiles_JSONArray = updatedProfilesCategoriesArray;
        }
        else if(counter1 == 1)
        {
            selectedCategories = 0;
            document.getElementById("check01").disabled = false;
            counter1 = counter1 + 1;
            if (document.getElementById("cardBody1").style.color == "blue")
            {
                document.getElementById("cardBody1").style.color = "white";
                document.getElementById("categoryImage1").style.filter = "grayscale(0%)"

                document.getElementById("check02").checked = false;
                document.getElementById("cardBody2").style.color = "blue"
                document.getElementById("categoryImage2").style.filter = "grayscale(100%)"

                document.getElementById("check03").checked = false;
                document.getElementById("cardBody3").style.color = "blue"
                document.getElementById("categoryImage3").style.filter = "grayscale(100%)"

                document.getElementById("check04").checked = false;
                document.getElementById("cardBody4").style.color = "blue"
                document.getElementById("categoryImage4").style.filter = "grayscale(100%)"

                document.getElementById("check05").checked = false;
                document.getElementById("cardBody5").style.color = "blue"
                document.getElementById("categoryImage5").style.filter = "grayscale(100%)"

                document.getElementById("check06").checked = false;
                document.getElementById("cardBody6").style.color = "blue"
                document.getElementById("categoryImage6").style.filter = "grayscale(100%)"

                document.getElementById("check07").checked = false;
                document.getElementById("cardBody7").style.color = "blue"
                document.getElementById("categoryImage7").style.filter = "grayscale(100%)"

                document.getElementById("check08").checked = false;
                document.getElementById("cardBody8").style.color = "blue"
                document.getElementById("categoryImage8").style.filter = "grayscale(100%)"

                document.getElementById("check09").checked = false;
                document.getElementById("cardBody9").style.color = "blue"
                document.getElementById("categoryImage9").style.filter = "grayscale(100%)"

                meatSelected = false;
                coffeeTeaSelected = false;
                plasticsSelected = false;
                fruitSelected = false;
                bakedSelected = false;
                spicesSelected = false;
                frozenSelected = false;
                drinksSelected = false;

                allCategoriesSelected = true;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody1").style.color == "white")
            {
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)";
                
                allCategoriesSelected = false;
                updateProfileCategoriesArray();
            }
        }
        else
        {
            counter1 = 1;
        }
        updateProfileCategoriesArray();
    }

    document.getElementById("meat").addEventListener("click", highlightCategoryAndFilterCards2);

    function highlightCategoryAndFilterCards2()
    {
        if(counter2 == 1)
        {
            counter2 = counter2 + 1;
            if (document.getElementById("cardBody2").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody2").style.color = "white";
                document.getElementById("categoryImage2").style.filter = "grayscale(0%)"

                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"

                //Update categories selected values
                meatSelected = true;
                allCategoriesSelected = false;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody2").style.color == "white")
            {
                meatSelected = false;
                updateProfileCategoriesArray();

                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody2").style.color = "blue";
                document.getElementById("categoryImage2").style.filter = "grayscale(100%)"

                if (selectedCategories == 0)
                {
                    allCategoriesSelected = true;
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
                
            }
        }
        else
        {
            counter2 = 1;
        }
        
    }

    document.getElementById("coffeeTea").addEventListener("click", highlightCategoryAndFilterCards3);

    function highlightCategoryAndFilterCards3()
    {
        if(counter3 == 1)
        {
            counter3 = counter3 + 1;
            if (document.getElementById("cardBody3").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody3").style.color = "white";
                document.getElementById("categoryImage3").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"

                allCategoriesSelected = false;
                coffeeTeaSelected = true;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody3").style.color == "white")
            {
                coffeeTeaSelected = false;
                updateProfileCategoriesArray();

                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody3").style.color = "blue";
                document.getElementById("categoryImage3").style.filter = "grayscale(100%)"

                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter3 = 1;
        }
    }

    document.getElementById("plastics").addEventListener("click", highlightCategoryAndFilterCards4);

    function highlightCategoryAndFilterCards4()
    {
        if(counter4 == 1)
        {
            counter4 = counter4 + 1;
            if (document.getElementById("cardBody4").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody4").style.color = "white";
                document.getElementById("categoryImage4").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)" 

                allCategoriesSelected = false;
                plasticsSelected = true;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody4").style.color == "white")
            {
                plasticsSelected = false;
                updateProfileCategoriesArray();

                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody4").style.color = "blue";
                document.getElementById("categoryImage4").style.filter = "grayscale(100%)"

                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter4 = 1;
        }
    }

    document.getElementById("fruit").addEventListener("click", highlightCategoryAndFilterCards5);

    function highlightCategoryAndFilterCards5()
    {
        if(counter5 == 1)
        {
            counter5 = counter5 + 1;
            if (document.getElementById("cardBody5").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody5").style.color = "white";
                document.getElementById("categoryImage5").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"

                allCategoriesSelected = false;
                fruitSelected = true;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody5").style.color == "white")
            {
                fruitSelected = false;
                updateProfileCategoriesArray();

                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody5").style.color = "blue";
                document.getElementById("categoryImage5").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter5 = 1;
        }
    }

    document.getElementById("baked").addEventListener("click", highlightCategoryAndFilterCards6);

    function highlightCategoryAndFilterCards6()
    {
        if(counter6 == 1)
        {
            counter6 = counter6 + 1;
            if (document.getElementById("cardBody6").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody6").style.color = "white";
                document.getElementById("categoryImage6").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"

                allCategoriesSelected = false;
                bakedSelected = true;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody6").style.color == "white")
            {
                bakedSelected = false;
                updateProfileCategoriesArray();

                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody6").style.color = "blue";
                document.getElementById("categoryImage6").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter6 = 1;
        }
    }

    document.getElementById("spices").addEventListener("click", highlightCategoryAndFilterCards7);

    function highlightCategoryAndFilterCards7()
    {
        if(counter7 == 1)
        {
            counter7 = counter7 + 1;
            if (document.getElementById("cardBody7").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody7").style.color = "white";
                document.getElementById("categoryImage7").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"

                allCategoriesSelected = false;
                spicesSelected = true;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody7").style.color == "white")
            {
                spicesSelected = false;
                updateProfileCategoriesArray();

                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody7").style.color = "blue";
                document.getElementById("categoryImage7").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter7 = 1;
        }
    }

    document.getElementById("frozen").addEventListener("click", highlightCategoryAndFilterCards8);

    function highlightCategoryAndFilterCards8()
    {
        if(counter8 == 1)
        {
            counter8 = counter8 + 1;
            if (document.getElementById("cardBody8").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody8").style.color = "white";
                document.getElementById("categoryImage8").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"

                allCategoriesSelected = false;
                frozenSelected = true;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody8").style.color == "white")
            {
                frozenSelected = false;
                updateProfileCategoriesArray();

                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody8").style.color = "blue";
                document.getElementById("categoryImage8").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter8 = 1;
        }
    }
    document.getElementById("drinks").addEventListener("click", highlightCategoryAndFilterCards9);

    function highlightCategoryAndFilterCards9()
    {
        if(counter9 == 1)
        {
            counter9 = counter9 + 1;
            if (document.getElementById("cardBody9").style.color == "blue")
            {
                selectedCategories = selectedCategories +1;
                document.getElementById("cardBody9").style.color = "white";
                document.getElementById("categoryImage9").style.filter = "grayscale(0%)"
                
                document.getElementById("cardBody1").style.color = "blue";
                document.getElementById("check01").disabled = false;
                document.getElementById("check01").checked = true;
                document.getElementById("categoryImage1").style.filter = "grayscale(100%)"

                allCategoriesSelected = false;
                drinksSelected = true;
                updateProfileCategoriesArray();
            }
            else if (document.getElementById("cardBody9").style.color == "white")
            {
                drinksSelected = false;
                updateProfileCategoriesArray();

                selectedCategories = selectedCategories -1;
                document.getElementById("cardBody9").style.color = "blue";
                document.getElementById("categoryImage9").style.filter = "grayscale(100%)"
                
                if (selectedCategories == 0)
                {
                    document.getElementById("check01").checked = false;
                    document.getElementById("cardBody1").style.color = "white";
                    document.getElementById("check01").disabled = true;
                    document.getElementById("categoryImage1").style.filter = "grayscale(0)"
                }
            }
        }
        else
        {
            counter9 = 1;
        }
    }
    function updateProfileCategoriesArray()
    {
        // let tempCategoryProfilesArray
        updatedProfilesCategoriesArray = {};
        // state.allProfiles_JSONArray = updatedProfilesCategoriesArray;
        if(!meatSelected && !coffeeTeaSelected && !plasticsSelected && !fruitSelected && !bakedSelected && !spicesSelected && !frozenSelected && !drinksSelected)
        {
            allCategoriesSelected = true;
            updatedProfilesCategoriesArray = Object.assign({}, fullArrayObject);
            console.log("All Categ Selected");
        }
        else
        {
        for (key in fullArrayObject)
        {
            if(meatSelected)
                {
                    for (var i=0; i<= fullArrayObject[key]["supplierCategory"].length; i++)
                        {
                            if (fullArrayObject[key]["supplierCategory"][i] == "meat")
                            {
                                updatedProfilesCategoriesArray[key] = fullArrayObject[key];
                                break;
                            }
                        }
                }
                if(coffeeTeaSelected == true)
                {
                    for (var i=0; i<= fullArrayObject[key]["supplierCategory"].length; i++)
                        {
                            if (fullArrayObject[key]["supplierCategory"][i] == "coffeeTea")
                            {
                                updatedProfilesCategoriesArray[key] = fullArrayObject[key];
                                break;
                            }
                        }
                }
                if(plasticsSelected == true)
                {
                    for (var i=0; i<= fullArrayObject[key]["supplierCategory"].length; i++)
                        {
                            if (fullArrayObject[key]["supplierCategory"][i] == "plastics")
                            {
                                updatedProfilesCategoriesArray[key] = fullArrayObject[key];
                                break;
                            }
                        }
                }
                if(fruitSelected == true)
                {
                    for (var i=0; i<= fullArrayObject[key]["supplierCategory"].length; i++)
                        {
                            if (fullArrayObject[key]["supplierCategory"][i] == "fruit")
                            {
                                updatedProfilesCategoriesArray[key] = fullArrayObject[key];
                                break;
                            }
                        }
                }
                if(bakedSelected == true)
                {
                    for (var i=0; i<= fullArrayObject[key]["supplierCategory"].length; i++)
                        {
                            if (fullArrayObject[key]["supplierCategory"][i] == "baked")
                            {
                                updatedProfilesCategoriesArray[key] = fullArrayObject[key];
                                break;
                            }
                        }
                }
                if(spicesSelected == true)
                {
                    for (var i=0; i<= fullArrayObject[key]["supplierCategory"].length; i++)
                        {
                            if (fullArrayObject[key]["supplierCategory"][i] == "spices")
                            {
                                updatedProfilesCategoriesArray[key] = fullArrayObject[key];
                                break;
                            }
                        }
                }
                if(frozenSelected == true)
                {
                    for (var i=0; i<= fullArrayObject[key]["supplierCategory"].length; i++)
                        {
                            if (fullArrayObject[key]["supplierCategory"][i] == "frozen")
                            {
                                updatedProfilesCategoriesArray[key] = fullArrayObject[key];
                                break;
                            }
                        }
                }
                if(drinksSelected == true)
                {
                    for (var i=0; i<= fullArrayObject[key]["supplierCategory"].length; i++)
                        {
                            if (fullArrayObject[key]["supplierCategory"][i] == "drinks")
                            {
                                updatedProfilesCategoriesArray[key] = fullArrayObject[key];
                                break;
                            }
                        }
                }
            }
            
        }
        updateProfilesArray();
        // console.log("''''''''''''''''' updatedProfilesCategoriesArray Values '''''''''''''''''''");
        // console.log(updatedProfilesCategoriesArray);
        // console.log("''''''''''''''''' updatedProfilesLocationsArray Values '''''''''''''''''''");
        // console.log(updatedProfilesLocationsArray);
    }