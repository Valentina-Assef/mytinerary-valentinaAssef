import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"

export default function FormSignUp() {
  const countries = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CX', name: 'Christmas Island' },
    { code: 'CC', name: 'Cocos (Keeling) Islands' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'Congo, Democratic Republic of the' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FK', name: 'Falkland Islands (Malvinas)' },
    { code: 'FO', name: 'Faroe Islands' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GF', name: 'French Guiana' },
    { code: 'PF', name: 'French Polynesia' },
    { code: 'TF', name: 'French Southern Territories' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GR', name: 'Greece' },
    { code: 'GL', name: 'Greenland' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GP', name: 'Guadeloupe' },
    { code: 'GU', name: 'Guam' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HM', name: 'Heard Island and McDonald Islands' },
    { code: 'VA', name: 'Holy See (Vatican City State)' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran, Islamic Republic of' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'CI', name: "Côte d'Ivoire" },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'LA', name: 'Laos' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MK', name: 'North Macedonia' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MQ', name: 'Martinique' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NU', name: 'Niue' },
    { code: 'NF', name: 'Norfolk Island' },
    { code: 'NO', name: 'Norway' },
    { code: 'NC', name: 'New Caledonia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'OM', name: 'Oman' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PN', name: 'Pitcairn Islands' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'QA', name: 'Qatar' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'RE', name: 'Reunion' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russia' },
    { code: 'EH', name: 'Western Sahara' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'SH', name: 'Saint Helena' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'ST', name: 'Sao Tome and Principe' },
    { code: 'SN', name: 'Senegal' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SY', name: 'Syria' },
    { code: 'SO', name: 'Somalia' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'PM', name: 'Saint Pierre and Miquelon' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SR', name: 'Suriname' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TG', name: 'Togo' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'YE', name: 'Yemen' },
    { code: 'YU', name: 'Yugoslavia' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' }
  ]

  //Estado inicial de los input
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    country: "",
    photo: "",
    password: ""
  })

  //Obtiene los datos del formulario
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  //Evento submit del formulario
  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:7000/api/auth/signup", formData);
  
      if (response.status === 201) {
        Swal.fire({
          title: 'Success',
          text: 'User created successfully',
          icon: 'success',
          confirmButtonText: 'Ok',
        })
        .then((result) => {
          if (result.isConfirmed) {
            console.log("Registro exitoso")
            window.location.href = '/signin';
          }
        })
      } else {
        console.error("Error en el registro:", response.data.message)
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="py-5 px-1">
      <h1 className="font-bold mb-10 text-3xl text-gray-700 text-center">Welcome to MyTinerary!!</h1>
      <form action="" onSubmit={handleSignUp} className="px-6 lg:px-10 grid grid-cols-6 gap-5">
        {/* Name */}
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="name" name="name" onChange={handleInput} className="mt-1 p-1.5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"/>
        </div>
        {/* Last Name */}
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="lastName" name="lastName" onChange={handleInput} className="mt-1 p-1.5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"/>
        </div>
        {/* Email */}
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" onChange={handleInput} className="mt-1 p-1.5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"/>
        </div>
        {/* Country Select*/}
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <select name="country" onChange={handleInput} className="mt-1 p-1.5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md">
            {countries.map((country) => (
              <option key={country.name} value={country.code}>{country.name}</option>
            ))}
          </select>
        </div>
        {/* Photo */}
        <div className="col-span-6">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo URL</label>
          <input type="text" id="photo" name="photo" onChange={handleInput} className="mt-1 p-1.5 w-full md:w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"/>
        </div>
        {/* Password */}
        <div className="col-span-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" onChange={handleInput} className="mt-1 p-1.5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"/>
        </div>
        {/* Footer form */}
        <div className="col-span-6 flex flex-col items-center justify-center">
          <button type="submit" className="rounded-3xl border-2 border-red-500 bg-red-500 py-3 px-5 text-md font-medium text-white transition hover:bg-transparent hover:text-gray-700 focus:outline-none active:text-gray-700">
            Create account
          </button>
        </div>
      </form>
    </div>
  )
}