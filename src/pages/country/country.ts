import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-country',
  templateUrl: 'country.html'
})
export class CountryPage {
countries;
  constructor(public viewCtrl: ViewController,public params: NavParams) {
   this.viewCtrl = viewCtrl;
   this.params = params;
   this.initialize();

  }
  initialize(){
  this.countries =[

 {ccode:"US",value:"1",name:"USA",mcode:"+1"},
 {ccode:"GB",value:"44",name:"UK",mcode:"+44"},
 {ccode:"DZ",value:"213",name:"Algeria",mcode:"+213"},
 {ccode:"AD",value:"376",name:"Andorra",mcode:"+376"},
 {ccode:"AO",value:"244",name:"Angola",mcode:"+244"},
 {ccode:"AI",value:"1264",name:"Anguilla",mcode:"+1264"},
 {ccode:"AG",value:"1268",name:"Antigua & Barbuda",mcode:"+1268"},
 {ccode:"AR",value:"54",name:"Argentina",mcode:"+54"},
 {ccode:"AM",value:"374",name:"Armenia",mcode:"+374"},
 {ccode:"AW",value:"297",name:"Aruba",mcode:"+297"},
 {ccode:"AU",value:"61",name:"Australia",mcode:"+61"},
 {ccode:"AT",value:"43",name:"Austria",mcode:"+43"},
 {ccode:"AZ",value:"994",name:"Azerbaijan",mcode:"+994"},
 {ccode:"BS",value:"1242",name:"Bahamas",mcode:"+1242"},
 {ccode:"BH",value:"973",name:"Bahrain",mcode:"+973"},
 {ccode:"BD",value:"880",name:"Bangladesh",mcode:"+880"},
 {ccode:"BB",value:"1246",name:"Barbados",mcode:"+1246"},
 {ccode:"BY",value:"375",name:"Belarus",mcode:"+375"},
 {ccode:"BE",value:"32",name:"Belgium",mcode:"+32"},
 {ccode:"BZ",value:"501",name:"Belize",mcode:"+501"},
 {ccode:"BJ",value:"229",name:"Benin",mcode:"+229"},
 {ccode:"BM",value:"1441",name:"Bermuda",mcode:"+1441"},
 {ccode:"BT",value:"975",name:"Bhutan",mcode:"+975"},
 {ccode:"BO",value:"591",name:"Bolivia",mcode:"+591"},
 {ccode:"BA",value:"387",name:"Bosnia Herzegovina",mcode:"+387"},
 {ccode:"BW",value:"267",name:"Botswana",mcode:"+267"},
 {ccode:"BR",value:"55",name:"Brazil",mcode:"+55"},
 {ccode:"BN",value:"673",name:"Brunei",mcode:"+673"},
 {ccode:"BG",value:"359",name:"Bulgaria",mcode:"+359"},
 {ccode:"BF",value:"226",name:"Burkina Faso",mcode:"+226"},
 {ccode:"BI",value:"257",name:"Burundi",mcode:"+257"},
 {ccode:"KH",value:"855",name:"Cambodia",mcode:"+855"},
 {ccode:"CM",value:"237",name:"Cameroon",mcode:"+237"},
 {ccode:"CA",value:"1",name:"Canada",mcode:"+1"},
 {ccode:"CV",value:"238",name:"Cape Verde Islands",mcode:"+238"},
 {ccode:"KY",value:"1345",name:"Cayman Islands",mcode:"+1345"},
 {ccode:"CF",value:"236",name:"Central African Republic",mcode:"+236"},
 {ccode:"CL",value:"56",name:"Chile",mcode:"+56"},
 {ccode:"CN",value:"86",name:"China",mcode:"+86"},
 {ccode:"CO",value:"57",name:"Colombia",mcode:"+57"},
 {ccode:"KM",value:"269",name:"Comoros",mcode:"+269"},
 {ccode:"CG",value:"242",name:"Congo",mcode:"+242"},
 {ccode:"CK",value:"682",name:"Cook Islands",mcode:"+682"},
 {ccode:"CR",value:"506",name:"Costa Rica",mcode:"+506"},
 {ccode:"HR",value:"385",name:"Croatia",mcode:"+385"},
 {ccode:"CU",value:"53",name:"Cuba",mcode:"+53"},
 {ccode:"CY",value:"90",name:"Cyprus - North",mcode:"+90"},
 {ccode:"CY",value:"357",name:"Cyprus - South",mcode:"+357"},
 {ccode:"CZ",value:"420",name:"Czech Republic",mcode:"+420"},
 {ccode:"DK",value:"45",name:"Denmark",mcode:"+45"},
 {ccode:"DJ",value:"253",name:"Djibouti",mcode:"+253"},
 {ccode:"DM",value:"1809",name:"Dominica",mcode:"+1809"},
 {ccode:"DO",value:"1809",name:"Dominican Republic",mcode:"+1809"},
 {ccode:"EC",value:"593",name:"Ecuador",mcode:"+593"},
 {ccode:"EG",value:"20",name:"Egypt",mcode:"+20"},
 {ccode:"SV",value:"503",name:"El Salvador",mcode:"+503"},
 {ccode:"GQ",value:"240",name:"Equatorial Guinea",mcode:"+240"},
 {ccode:"ER",value:"291",name:"Eritrea",mcode:"+291"},
 {ccode:"EE",value:"372",name:"Estonia",mcode:"+372"},
 {ccode:"ET",value:"251",name:"Ethiopia",mcode:"+251"},
 {ccode:"FK",value:"500",name:"Falkland Islands",mcode:"+500"},
 {ccode:"FO",value:"298",name:"Faroe Islands",mcode:"+298"},
 {ccode:"FJ",value:"679",name:"Fiji",mcode:"+679"},
 {ccode:"FI",value:"358",name:"Finland",mcode:"+358"},
 {ccode:"FR",value:"33",name:"France",mcode:"+33"},
 {ccode:"GF",value:"594",name:"French Guiana",mcode:"+594"},
 {ccode:"PF",value:"689",name:"French Polynesia",mcode:"+689"},
 {ccode:"GA",value:"241",name:"Gabon",mcode:"+241"},
 {ccode:"GM",value:"220",name:"Gambia",mcode:"+220"},
 {ccode:"GE",value:"7880",name:"Georgia",mcode:"+7880"},
 {ccode:"DE",value:"49",name:"Germany",mcode:"+49"},
 {ccode:"GH",value:"233",name:"Ghana",mcode:"+233"},
 {ccode:"GI",value:"350",name:"Gibraltar",mcode:"+350"},
 {ccode:"GR",value:"30",name:"Greece",mcode:"+30"},
 {ccode:"GL",value:"299",name:"Greenland",mcode:"+299"},
 {ccode:"GD",value:"1473",name:"Grenada",mcode:"+1473"},
 {ccode:"GP",value:"590",name:"Guadeloupe",mcode:"+590"},
 {ccode:"GU",value:"671",name:"Guam",mcode:"+671"},
 {ccode:"GT",value:"502",name:"Guatemala",mcode:"+502"},
 {ccode:"GN",value:"224",name:"Guinea",mcode:"+224"},
 {ccode:"GW",value:"245",name:"Guinea - Bissau",mcode:"+245"},
 {ccode:"GY",value:"592",name:"Guyana",mcode:"+592"},
 {ccode:"HT",value:"509",name:"Haiti",mcode:"+509"},
 {ccode:"HN",value:"504",name:"Honduras",mcode:"+504"},
 {ccode:"HK",value:"852",name:"Hong Kong",mcode:"+852"},
 {ccode:"HU",value:"36",name:"Hungary",mcode:"+36"},
 {ccode:"IS",value:"354",name:"Iceland",mcode:"+354"},
 {ccode:"IN",value:"91",name:"India",mcode:"+91"},
 {ccode:"ID",value:"62",name:"Indonesia",mcode:"+62"},
 {ccode:"IQ",value:"964",name:"Iraq",mcode:"+964"},
 {ccode:"IR",value:"98",name:"Iran",mcode:"+98"},
 {ccode:"IE",value:"353",name:"Ireland",mcode:"+353"},
 {ccode:"IL",value:"972",name:"Israel",mcode:"+972"},
 {ccode:"IT",value:"39",name:"Italy",mcode:"+39"},
 {ccode:"JM",value:"1876",name:"Jamaica",mcode:"+1876"},
 {ccode:"JP",value:"81",name:"Japan",mcode:"+81"},
 {ccode:"JO",value:"962",name:"Jordan",mcode:"+962"},
 {ccode:"KZ",value:"7",name:"Kazakhstan",mcode:"+7"},
 {ccode:"KE",value:"254",name:"Kenya",mcode:"+254"},
 {ccode:"KI",value:"686",name:"Kiribati",mcode:"+686"},
 {ccode:"KP",value:"850",name:"Korea - North",mcode:"+850"},
 {ccode:"KR",value:"82",name:"Korea - South",mcode:"+82"},
 {ccode:"KW",value:"965",name:"Kuwait",mcode:"+965"},
 {ccode:"KG",value:"996",name:"Kyrgyzstan",mcode:"+996"},
 {ccode:"LA",value:"856",name:"Laos",mcode:"+856"},
 {ccode:"LV",value:"371",name:"Latvia",mcode:"+371"},
 {ccode:"LB",value:"961",name:"Lebanon",mcode:"+961"},
 {ccode:"LS",value:"266",name:"Lesotho",mcode:"+266"},
 {ccode:"LR",value:"231",name:"Liberia",mcode:"+231"},
 {ccode:"LY",value:"218",name:"Libya",mcode:"+218"},
 {ccode:"LI",value:"417",name:"Liechtenstein",mcode:"+417"},
 {ccode:"LT",value:"370",name:"Lithuania",mcode:"+370"},
 {ccode:"LU",value:"352",name:"Luxembourg",mcode:"+352"},
 {ccode:"MO",value:"853",name:"Macao",mcode:"+853"},
 {ccode:"MK",value:"389",name:"Macedonia",mcode:"+389"},
 {ccode:"MG",value:"261",name:"Madagascar",mcode:"+261"},
 {ccode:"MW",value:"265",name:"Malawi",mcode:"+265"},
 {ccode:"MY",value:"60",name:"Malaysia",mcode:"+60"},
 {ccode:"MV",value:"960",name:"Maldives",mcode:"+960"},
 {ccode:"ML",value:"223",name:"Mali",mcode:"+223"},
 {ccode:"MT",value:"356",name:"Malta",mcode:"+356"},
 {ccode:"MH",value:"692",name:"Marshall Islands",mcode:"+692"},
 {ccode:"MQ",value:"596",name:"Martinique",mcode:"+596"},
 {ccode:"MR",value:"222",name:"Mauritania",mcode:"+222"},
 {ccode:"YT",value:"269",name:"Mayotte",mcode:"+269"},
 {ccode:"MX",value:"52",name:"Mexico",mcode:"+52"},
 {ccode:"FM",value:"691",name:"Micronesia",mcode:"+691"},
 {ccode:"MD",value:"373",name:"Moldova",mcode:"+373"},
 {ccode:"MC",value:"377",name:"Monaco",mcode:"+377"},
 {ccode:"MN",value:"976",name:"Mongolia",mcode:"+976"},
 {ccode:"MS",value:"1664",name:"Montserrat",mcode:"+1664"},
 {ccode:"MA",value:"212",name:"Morocco",mcode:"+212"},
 {ccode:"MZ",value:"258",name:"Mozambique",mcode:"+258"},
 {ccode:"MN",value:"95",name:"Myanmar",mcode:"+95"},
 {ccode:"NA",value:"264",name:"Namibia",mcode:"+264"},
 {ccode:"NR",value:"674",name:"Nauru",mcode:"+674"},
 {ccode:"NP",value:"977",name:"Nepal",mcode:"+977"},
 {ccode:"NL",value:"31",name:"Netherlands",mcode:"+31"},
 {ccode:"NC",value:"687",name:"New Caledonia",mcode:"+687"},
 {ccode:"NZ",value:"64",name:"New Zealand",mcode:"+64"},
 {ccode:"NI",value:"505",name:"Nicaragua",mcode:"+505"},
 {ccode:"NE",value:"227",name:"Niger",mcode:"+227"},
 {ccode:"NG",value:"234",name:"Nigeria",mcode:"+234"},
 {ccode:"NU",value:"683",name:"Niue",mcode:"+683"},
 {ccode:"NF",value:"672",name:"Norfolk Islands",mcode:"+672"},
 {ccode:"NP",value:"670",name:"Northern Marianas",mcode:"+670"},
 {ccode:"NO",value:"47",name:"Norway",mcode:"+47"},
 {ccode:"OM",value:"968",name:"Oman",mcode:"+968"},
 {ccode:"PK",value:"92",name:"Pakistan",mcode:"+92"},
 {ccode:"PW",value:"680",name:"Palau",mcode:"+680"},
 {ccode:"PA",value:"507",name:"Panama",mcode:"+507"},
 {ccode:"PG",value:"675",name:"Papua New Guinea",mcode:"+675"},
 {ccode:"PY",value:"595",name:"Paraguay",mcode:"+595"},
 {ccode:"PE",value:"51",name:"Peru",mcode:"+51"},
 {ccode:"PH",value:"63",name:"Philippines",mcode:"+63"},
 {ccode:"PL",value:"48",name:"Poland",mcode:"+48"},
 {ccode:"PT",value:"351",name:"Portugal",mcode:"+351"},
 {ccode:"PR",value:"1787",name:"Puerto Rico",mcode:"+1787"},
 {ccode:"QA",value:"974",name:"Qatar",mcode:"+974"},
 {ccode:"RE",value:"262",name:"Reunion",mcode:"+262"},
 {ccode:"RO",value:"40",name:"Romania",mcode:"+40"},
 {ccode:"RU",value:"7",name:"Russia",mcode:"+7"},
 {ccode:"RW",value:"250",name:"Rwanda",mcode:"+250"},
 {ccode:"SM",value:"378",name:"San Marino",mcode:"+378"},
 {ccode:"ST",value:"239",name:"Sao Tome & Principe",mcode:"+239"},
 {ccode:"SA",value:"966",name:"Saudi Arabia",mcode:"+966"},
 {ccode:"SN",value:"221",name:"Senegal",mcode:"+221"},
 {ccode:"CS",value:"381",name:"Serbia",mcode:"+381"},
 {ccode:"SC",value:"248",name:"Seychelles",mcode:"+248"},
 {ccode:"SL",value:"232",name:"Sierra Leone",mcode:"+232"},
 {ccode:"SG",value:"65",name:"Singapore",mcode:"+65"},
 {ccode:"SK",value:"421",name:"Slovak Republic",mcode:"+421"},
 {ccode:"SI",value:"386",name:"Slovenia",mcode:"+386"},
 {ccode:"SB",value:"677",name:"Solomon Islands",mcode:"+677"},
 {ccode:"SO",value:"252",name:"Somalia",mcode:"+252"},
 {ccode:"ZA",value:"27",name:"South Africa",mcode:"+27"},
 {ccode:"ES",value:"34",name:"Spain",mcode:"+34"},
 {ccode:"LK",value:"94",name:"Sri Lanka",mcode:"+94"},
 {ccode:"SH",value:"290",name:"St. Helena",mcode:"+290"},
 {ccode:"KN",value:"1869",name:"St. Kitts",mcode:"+1869"},
 {ccode:"SC",value:"1758",name:"St. Lucia",mcode:"+1758"},
 {ccode:"SR",value:"597",name:"Suriname",mcode:"+597"},
 {ccode:"SD",value:"249",name:"Sudan",mcode:"+249"},
 {ccode:"SZ",value:"268",name:"Swaziland",mcode:"+268"},
 {ccode:"SE",value:"46",name:"Sweden",mcode:"+46"},
 {ccode:"CH",value:"41",name:"Switzerland",mcode:"+41"},
 {ccode:"SY",value:"963",name:"Syria",mcode:"+963"},
 {ccode:"TW",value:"886",name:"Taiwan",mcode:"+886"},
 {ccode:"TJ",value:"992",name:"Tajikistan",mcode:"+992"},
 {ccode:"TH",value:"66",name:"Thailand",mcode:"+66"},
 {ccode:"TG",value:"228",name:"Togo",mcode:"+228"},
 {ccode:"TO",value:"676",name:"Tonga",mcode:"+676"},
 {ccode:"TT",value:"1868",name:"Trinidad & Tobago",mcode:"+1868"},
 {ccode:"TN",value:"216",name:"Tunisia",mcode:"+216"},
 {ccode:"TR",value:"90",name:"Turkey",mcode:"+90"},
 {ccode:"TM",value:"993",name:"Turkmenistan",mcode:"+993"},
 {ccode:"TC",value:"1649",name:"Turks & Caicos Islands",mcode:"+1649"},
 {ccode:"TV",value:"688",name:"Tuvalu",mcode:"+688"},
 {ccode:"UG",value:"256",name:"Uganda",mcode:"+256"},
 {ccode:"UA",value:"380",name:"Ukraine",mcode:"+380"},
 {ccode:"AE",value:"971",name:"United Arab Emirates",mcode:"+971"},
 {ccode:"UY",value:"598",name:"Uruguay",mcode:"+598"},
 {ccode:"UZ",value:"998",name:"Uzbekistan",mcode:"+998"},
 {ccode:"VU",value:"678",name:"Vanuatu",mcode:"+678"},
 {ccode:"VA",value:"379",name:"Vatican City",mcode:"+379"},
 {ccode:"VE",value:"58",name:"Venezuela",mcode:"+58"},
 {ccode:"VN",value:"84",name:"Vietnam",mcode:"+84"},
 {ccode:"VG",value:"1",name:"Virgin Islands - British",mcode:"+1"},
 {ccode:"VI",value:"1",name:"Virgin Islands - US",mcode:"+1"},
 {ccode:"WF",value:"681",name:"Wallis & Futuna",mcode:"+681"},
 {ccode:"YE",value:"969",name:"Yemen",mcode:"North)(+969"},
 {ccode:"YE",value:"967",name:"Yemen",mcode:"South)(+967"},
 {ccode:"ZM",value:"260",name:"Zambia",mcode:"+260"},
 {ccode:"ZW",value:"263",name:"Zimbabwe",mcode:"+263"}
  ]

  }
  getItems(ev) {
     // Reset items back to all of the items
    this.initialize();

    // set val to the value of the ev target
   var val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.countries = this.countries.filter((item) => {
       return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
   }
  dismiss(item) {
    this.viewCtrl.dismiss(item);
  }
}
