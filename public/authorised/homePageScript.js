let selectedProvinceSuppliers = [];
var updatedProfilesLocationsArray = Object.assign({}, fullArrayObject);
var updatedProfilesCitiesArray = Object.assign({}, fullArrayObject);

// var filteredProfilesArray = Object.assign({}, fullArrayObject);

var provinceText = "";

// console.log(Object.keys(filteredProfilesArray).length);

// document.getElementById("easternCities").classList.remove("d-none")
document.getElementById("easternCities").disabled = true;

document.querySelector(".form-select-province").addEventListener("change", provinceFilter);
document.getElementById("easternCities").addEventListener("change", cityFilter);
document.getElementById("haelCities").addEventListener("change", cityFilter);
document.getElementById("makkahCities").addEventListener("change", cityFilter);
document.getElementById("riyadhCities").addEventListener("change", cityFilter);
document.getElementById("aseerCities").addEventListener("change", cityFilter);
document.getElementById("madinahCities").addEventListener("change", cityFilter);
document.getElementById("qassimCities").addEventListener("change", cityFilter);
document.getElementById("taboukCities").addEventListener("change", cityFilter);
document.getElementById("najranCities").addEventListener("change", cityFilter);
document.getElementById("jazanCities").addEventListener("change", cityFilter);

function provinceFilter()
{
  updatedProfilesLocationsArray = {};
  // state.allProfiles_JSONArray = filteredProfilesArray;
  state.page = 1;
  // console.log(Object.keys(fullArrayObject).length);

  // state.allProfiles_JSONArray = filteredProfilesArray;

  // console.log("///////////////////////// Start Initial Values //////////////////////////////");
  // console.log(Object.keys(filteredProfilesArray).length);
  // console.log(Object.keys(state.allProfiles_JSONArray).length);
  // console.log("/////////////////////////// End Initial Values /////////////////////////////");
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);

  console.log("inside homePageScript.js!")

  // state.allProfiles_JSONArray = fullArrayObject;

  var selectedProvince = document.querySelector(".form-select-province")
  var value = selectedProvince.options[selectedProvince.selectedIndex].value;// get selected option value
  provinceText = selectedProvince.options[selectedProvince.selectedIndex].text ;
  if(provinceText  == "المنطقة الشرقية")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").disabled = false;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "المنطقة الشرقية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;

    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);

    document.querySelectorAll(".eastern").forEach(showElement);
    document.querySelectorAll(".eastern").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }

    }
  else if(provinceText  == "حائل")
  {
    selectedProvinceSuppliers = [];
    // state.allProfiles_JSONArray = fullArrayObject;

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("haelCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "حائل")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // console.log(Object.keys(filteredProfilesArray).length);
    // console.log(Object.keys(state.allProfiles_JSONArray).length);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);

    document.querySelectorAll(".hael").forEach(showElement);
    document.querySelectorAll(".hael").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);
    
    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      
    }
  else if(provinceText  == "مكة المكرمة")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("makkahCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "مكة المكرمة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);

    document.querySelectorAll(".makkah").forEach(showElement);
    document.querySelectorAll(".makkah").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);
 
    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }
    
  }
  else if(provinceText  == "عسير")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("aseerCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "عسير")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".aseer").forEach(showElement);

    document.querySelectorAll(".aseer").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);
  
    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }

  }
  else if(provinceText  == "الرياض")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("riyadhCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "الرياض")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".riyadh").forEach(showElement);
    document.querySelectorAll(".riyadh").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }
  }
  else if(provinceText  == "المدينة المنورة")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("madinahCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "المدينة المنورة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".madinah").forEach(showElement);
    document.querySelectorAll(".madinah").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
        elem.classList.remove("d-none");
      }
    function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
    
  }
  else if(provinceText  == "القصيم")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("qassimCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "القصيم")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".qassim").forEach(showElement);
    document.querySelectorAll(".qassim").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
        elem.classList.remove("d-none");
      }
    function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
    
  }
  else if(provinceText  == "تبوك")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("taboukCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "تبوك")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".tabouk").forEach(showElement);
    document.querySelectorAll(".tabouk").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }

    }
  else if(provinceText  == "نجران")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("najranCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "نجران")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".najran").forEach(showElement);
    document.querySelectorAll(".najran").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);


    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
    }
  else if(provinceText  == "جازان")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;

    document.getElementById("jazanCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "جازان")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".jazan").forEach(showElement);
    document.querySelectorAll(".jazan").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);


    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      

    }
  else{
    // state.allProfiles_JSONArray = fullArrayObject;

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("easternCities").disabled = true;
    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    
    updatedProfilesLocationsArray = Object.assign({}, fullArrayObject);
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);

    
    document.querySelectorAll(".eastern").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(showElement);

    document.querySelectorAll(".hael").forEach(showElement);

    document.querySelectorAll(".aseer").forEach(showElement);

    document.querySelectorAll(".riyadh").forEach(showElement);

    document.querySelectorAll(".madinah").forEach(showElement);

    document.querySelectorAll(".qassim").forEach(showElement);

    document.querySelectorAll(".tabouk").forEach(showElement);

    document.querySelectorAll(".najran").forEach(showElement);

    document.querySelectorAll(".jazan").forEach(showElement);

    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
  }
  // console.log("....... UPDATED LOCATIONS ARRAY .........");
  // console.log(updatedProfilesLocationsArray);
}

function cityFilter(e)
{
  updatedProfilesLocationsArray = {};

  let selectedCity = document.getElementById("easternSelected");

  if(e.target.id == "haelCities")
  {
    selectedCity = document.getElementById("haelCities");
  }
  else if(e.target.id == "easternCities")
  {
    selectedCity = document.getElementById("easternCities");
  }
  else if(e.target.id == "riyadhCities")
  {
    selectedCity = document.getElementById("riyadhCities");
  }
  else if(e.target.id == "makkahCities")
  {
    selectedCity = document.getElementById("makkahCities");
  }
  else if(e.target.id == "najranCities")
  {
    selectedCity = document.getElementById("najranCities");
  }
  else if(e.target.id == "aseerCities")
  {
    selectedCity = document.getElementById("aseerCities");
  }
  else if(e.target.id == "abhaCities")
  {
    selectedCity = document.getElementById("abhaCities");
  }
  // else if(e.target.id == "joufCities")
  // {
  //   selectedCity = document.getElementById("joufCities");
  // }
  // else if(e.target.id == "northernBordersCities")
  // {
  //   selectedCity = document.getElementById("northernBordersCities");
  // }
  else if(e.target.id == "madinahCities")
  {
    selectedCity = document.getElementById("madinahCities");
  }
  else if(e.target.id == "jazanCities")
  {
    selectedCity = document.getElementById("jazanCities");
  }
  else if(e.target.id == "qassimCities")
  {
    selectedCity = document.getElementById("qassimCities");
  }
  else if(e.target.id == "taboukCities")
  {
    selectedCity = document.getElementById("taboukCities");
  }
  else if(e.target.id == "najranCities")
  {
    selectedCity = document.getElementById("najranCities");
  }
  
  // get selected option text
  let cityText = selectedCity.options[selectedCity.selectedIndex].text;

  // Eastern Province Cities
  if(cityText == "الظهران")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الظهران")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "الخبر")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الخبر")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "الدمام")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الدمام")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "الجبيل")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الجبيل")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }

  else if(cityText == "الأحساء")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الأحساء")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "القطيف")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "القطيف")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "حفر الباطن")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "حفر الباطن")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "الخفجي")
  {
  
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الخفجي")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "النعيرية")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "النعيرية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }

//Hael Province Cities
if(cityText == "مدينة حائل")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "مدينة حائل")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
} 
else if(cityText == "بقعاء")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "بقعاء")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "قفار")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "قفار")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الغزالة")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "الغزالة")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الشنان")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "الشنان")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "موقق")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "موقق")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الحائط")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "الحائط")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "السليمي")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "السليمي")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الشملي")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "الشملي")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "سميراء")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "سميراء")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الحليفة")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "الحليفة")
     {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
     }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "جبة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "جبة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}

// Makkah cities
else if(cityText == "الطائف")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الطائف")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "جدة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "جدة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "مكة المكرمة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "مكة المكرمة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "رابغ")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "رابغ")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "القنفذة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "القنفذة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الليث")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الليث")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "خليص")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "خليص")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}

// Riyadh Cities
else if(cityText == "شمال الرياض")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "شمال الرياض")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "جنوب الرياض")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "جنوب الرياض")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "شرق الرياض")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "شرق الرياض")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "غرب الرياض")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "غرب الرياض")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "وسط الرياض")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "وسط الرياض")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  
  // Aseer Cities
  else if(cityText == "أبها")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "أبها")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "خميس مشيط")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "خميس مشيط")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "النماص")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "النماص")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "تنومة")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "تنومة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "رجال ألمع")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "رجال ألمع")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "ظهران الجنوب")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "ظهران الجنوب")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }

  // Madinah Cities
  else if(cityText == "الحناكية")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الحناكية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "العلا")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "العلا")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "ينبع")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "ينبع")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "ينبع الصناعية")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "ينبع الصناعية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "المدينة المنورة")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "المدينة المنورة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }

  // Qassim Cities
  else if(cityText == "عنيزة")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "عنيزة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "بريدة")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "بريدة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "البكيرية")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "البكيربة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "ضرية")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "ضرية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "المذنب")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "المذنب")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "عيون الجواء")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "عيون الجواء")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "رياض الخبراء")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "رياض الخبراء")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "عقلة الصقور")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "عقلة الصقور")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "الأسياح")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الأسياح")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "النبهانية")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "النبهانية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "الرس")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الرس")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "الشماسية")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الشماسية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }
  else if(cityText == "البدائع")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "البدائع")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
  }

// Tabouk Cities
else if(cityText == "أملج")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "أملج")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الوجه")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الوجه")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "تيماء")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "تيماء")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "ضباء")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "ضباء")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "حقل")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "حقل")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "البدع")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "البدع")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
// Najran Cities
else if(cityText == "رجلا")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "رجلاء")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "المشعلية")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "المشعلية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "حي الفيصلية")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "حي الفيصلية")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "حي الفهد")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "حي الفهد")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "سقام")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "سقام")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الغويلا")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الغويلا")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}

else if(cityText == "الجربة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الجربة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الصفا")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الصفا")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الشرفة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الشرفة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "القابل")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "القابل")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "العريسة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "العريسة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "حي الأسكان")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "حي الأسكان")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "شرق المطار")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "شرق المطار")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "يدمة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "يدمة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "حبونا")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "حبونا")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "نجران البلد")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "نجران البلد")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}

// Jazan Cities
else if(cityText == "صبيا")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "صبيا")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "صامطة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "صامطة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "أبو عريش")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "أبو عريش")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "جازان")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "جازان")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "أحد مسارحة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "أحد مسارحة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "بيش")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "بيش")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "العارضة")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "العارضة")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "ضمد")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "ضمد")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الدرب")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الدرب")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "العيدابي")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "العيدابي")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الدائر")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الدائر")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الريث")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الريث")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الحرث")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الحرث")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "فرسان")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "فرسان")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "الطوال")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "الطوال")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);

}
else if(cityText == "هروب")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "هروب")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}
else if(cityText == "فيفاء")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "فيفاء")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateNumberOFSuppliersPerCategory(updatedProfilesLocationsArray);
}

// If no city selected
  else if(cityText == "المدينة / الحي")
  {
   provinceFilter(); 
  }
  // console.log("////// /////////// //////////// UPDATED LOCATIONS (CITIES-FILTERED) ARRAY /////////////////////////");
  // console.log(updatedProfilesLocationsArray);
}



// document.querySelector(".signup").addEventListener("click", function(){
//   document.querySelector(".signup").classList.add("dim");
//   setTimeout(function(){document.querySelector(".signup").classList.remove("dim");}, 150);
// });


// document.querySelector(".search").addEventListener("click", function(){
//   window.location.href = "http://stackoverflow.com";
//   console.log("search button clicked");
// });
