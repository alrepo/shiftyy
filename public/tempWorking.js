let selectedProvinceSuppliers = [];
var filteredProfilesArray = Object.assign({}, fullArrayObject);

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
  filteredProfilesArray = Object.assign({}, fullArrayObject);
  state.allProfiles_JSONArray = filteredProfilesArray;
  state.page = 1;
  // console.log(Object.keys(fullArrayObject).length);

  state.allProfiles_JSONArray = filteredProfilesArray;

  console.log("///////////////////////// Start Initial Values //////////////////////////////");
  console.log(Object.keys(filteredProfilesArray).length);
  console.log(Object.keys(state.allProfiles_JSONArray).length);
  console.log("/////////////////////////// End Initial Values /////////////////////////////");
    updateProfilesArray();

  console.log("inside homePageScript.js!")

  // state.allProfiles_JSONArray = fullArrayObject;

  var selectedProvince = document.querySelector(".form-select-province")
  var value = selectedProvince.options[selectedProvince.selectedIndex].value;// get selected option value
  provinceText = selectedProvince.options[selectedProvince.selectedIndex].text ;
  if(provinceText  == "المنطقة الشرقية")
  {
    console.log("eastern selected")
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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "المنطقة الشرقية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    console.log("///////////////////////// Start Eastern Prov Values //////////////////////////////");
    console.log(Object.keys(filteredProfilesArray).length);
    console.log(Object.keys(state.allProfiles_JSONArray).length);
    console.log("/////////////////////////// End Eastern Prov Values /////////////////////////////");
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);

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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "حائل")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    console.log("///////////////////////// Start Hael Prov Values //////////////////////////////");
    console.log(Object.keys(filteredProfilesArray).length);
    console.log(Object.keys(state.allProfiles_JSONArray).length);
    console.log("/////////////////////////// End Hael Prov Values /////////////////////////////");
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);

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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "مكة المكرمة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);

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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "عسير")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);


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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "الرياض")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);


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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "المدينة المنورة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);


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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "القصيم")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);


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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "تبوك")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);


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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "نجران")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);


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
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != "جازان")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);


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
    
    filteredProfilesArray = Object.assign({}, fullArrayObject);
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();

    
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
}

function cityFilter(e)
{
  let selectedCity = document.getElementById("easternSelected");

  console.log("target id: "+e.target.id);

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

  console.log(cityText+" is selected...");

  // Eastern Province Cities
  if(cityText == "الظهران")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الظهران")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "الخبر")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الخبر")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "الدمام")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الدمام")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "الجبيل")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الجبيل")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }

  else if(cityText == "الأحساء")
  {
  
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الأحساء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "القطيف")
  {
  
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "القطيف")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "حفر الباطن")
  {
  
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "حفر الباطن")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "الخفجي")
  {
  
    selectedProvinceSuppliers.forEach(function(item){
      if (!item.classList.contains('الخفجي'))
      {
        item.classList.add("d-none");
      }
      if (item.classList.contains('الخفجي'))
      {
        item.classList.remove("d-none");
      }
    });
  }
  else if(cityText == "النعيرية")
  {
  
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "النعيرية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }

//Hael Province Cities
if(cityText == "مدينة حائل")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "مدينة حائل")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
} 
else if(cityText == "بقعاء")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "بقعاء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "قفار")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "قفار")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الغزالة")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الغزالة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الشنان")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الشنان")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "موقق")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "موقق")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الحائط")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الحائط")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "السليمي")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "السليمي")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الشملي")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الشملي")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "سميراء")
{

  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "سميراء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الحليفة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الحليفة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "جبة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "جبة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}

// Makkah cities
else if(cityText == "الطائف")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الطائف")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "جدة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "جدة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "مكة المكرمة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "مكة المكرمة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "رابغ")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "رابغ")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "القنفذة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "القنفذة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الليث")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الليث")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "خليص")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "خليص")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}

// Riyadh Cities
else if(cityText == "شمال الرياض")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "شمال الرياض")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "جنوب الرياض")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "جنوب الرياض")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "شرق الرياض")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "شرق الرياض")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "غرب الرياض")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "غرب الرياض")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "وسط الرياض")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "وسط الرياض")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  
  // Aseer Cities
  else if(cityText == "أبها")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "أبها")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "خميس مشيط")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "خميس مشيط")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "النماص")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "النماص")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "تنومة")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "تنومة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "رجال ألمع")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "رجال ألمع")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "ظهران الجنوب")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "ظهران الجنوب")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }

  // Madinah Cities
  else if(cityText == "الحناكية")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الحناكية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "العلا")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "العلا")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "ينبع")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "ينبع")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "ينبع الصناعية")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "ينبع الصناعية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "المدينة المنورة")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "المدينة المنورة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }

  // Qassim Cities
  else if(cityText == "عنيزة")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "عنيزة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "بريدة")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "بريدة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "البكيرية")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "البكيرية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "ضرية")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "ضرية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "المذنب")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "المذنب")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "عيون الجواء")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "عيون الجواء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "رياض الخبراء")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "رياض الخبراء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "عقلة الصقور")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "عقلة الصقور")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "الأسياح")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الأسياح")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "النبهانية")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "النبهانية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "الرس")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الرس")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "الشماسية")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الشماسية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
  else if(cityText == "البدائع")
  {
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "البدائع")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }

// Tabouk Cities
else if(cityText == "أملج")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "أملج")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الوجه")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الوجه")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "تيماء")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "تيماء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "ضباء")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "ضباء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "حقل")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "حقل")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "البدع")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "البدع")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
// Najran Cities
else if(cityText == "رجلا")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "رجلاء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "المشعلية")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "المشعلية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "حي الفيصلية")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "حي الفيصلية")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "حي الفهد")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "حي الفهد")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "سقام")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "سقام")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الغويلا")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الغويلا")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}

else if(cityText == "الجربة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الجربة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الصفا")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الصفا")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الشرفة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الشرفة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "القابل")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "القابل")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "العريسة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "العريسة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "حي الأسكان")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "حي الأسكان")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "شرق المطار")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "شرق المطار")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "يدمة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "يدمة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "حبونا")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "حبونا")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "نجران البلد")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "نجران البلد")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}

// Jazan Cities
else if(cityText == "صبيا")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "صبيا")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "صامطة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "صامطة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "أبو عريش")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "أبو عريش")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "جازان")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "جازان")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "أحد مسارحة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "أحد مسارحة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "بيش")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "بيش")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "العارضة")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "العارضة")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "ضمد")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "ضمد")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الدرب")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الدرب")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "العيدابي")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "العيدابي")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الدائر")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الدائر")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الريث")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الريث")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الحرث")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الحرث")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "فرسان")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "فرسان")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "الطوال")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "الطوال")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "هروب")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "هروب")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}
else if(cityText == "فيفاء")
{
  for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierCity"] != "فيفاء")
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
}

// If no city selected
  else if(cityText == "المدينة / الحي")
  {
    // console.log("logging Province Text:");
    // console.log(provinceText);
    for(key in filteredProfilesArray)
    {
      if (filteredProfilesArray[key]["supplierProvince"] != provinceText)
      {
        delete filteredProfilesArray[key];
      }
    }
    state.allProfiles_JSONArray = filteredProfilesArray;
    updateProfilesArray();
    filteredProfilesArray = Object.assign({}, fullArrayObject);
  }
}

document.getElementById("supplierLoginOrRegisterButton").addEventListener("click", function(){
  Swal.fire({
    title: '',
    icon: '',
    iconHtml: '',
    confirmButtonText: 'إنشاء  حساب',
    cancelButtonText: 'دخول',
    showCancelButton: true,
    showCloseButton: true
  })
  document.querySelector(".swal2-confirm").addEventListener('click', function(){
    window.location.assign("signup.html")
  });
  document.querySelector(".swal2-cancel").addEventListener('click', function(){
    window.location.assign("signin.html")
  });
});


// document.querySelector(".signup").addEventListener("click", function(){
//   document.querySelector(".signup").classList.add("dim");
//   setTimeout(function(){document.querySelector(".signup").classList.remove("dim");}, 150);
// });


// document.querySelector(".search").addEventListener("click", function(){
//   window.location.href = "http://stackoverflow.com";
//   console.log("search button clicked");
// });
