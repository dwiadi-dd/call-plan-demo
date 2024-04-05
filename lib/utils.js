import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const namedList = [
  "Aditya Afriyandi",
  "Adnan Nugroho",
  "Agus Danu Dwi Pamungkas",
  "Agustianto",
  "Ahmad Basuki",
  "Aji Naufal Aqil",
  "Alex Gunawan",
  "Alfian Pradana",
  "Andhika",
  "Andri Lesmana Wanasurya",
  "Firdaus Martciano",
  "Fredy",
  "Grivia Trifosa Iskandar",
  "Hadi Utomo",
  "Hardryan Prasetyo Utomo",
  "Hari Aris Munandar",
  "Haryo Setowibowo A.",
  "Harrysta Perdana Kusuma",
  "Henry Kurniawan",
  "Ignatius Sarwo Edhi Wiyoto",
  "Indrayana Situmorang",
  "Irzan Idris Barizi",
  "Ismet Syarif Hamid",
  "Israno Rivaldi",
  "Jasmin",
  "Jesi Indrawan",
  "Joni Prastowo Sarira",
  "Junita Angdjasrin",
  "Karina Ivana",
  "Kevin Aldyan",
  "Komarudin",
  "Kun Aji Susdiatmoko",
  "Kuswoyo",
  "Leonardus Hardjo",
  "Lucki Ferbiansah",
  "M Imron",
  "Mahmad Rahman",
  "Mario Indriawan",
  "Melan Andriyani",
  "Mohamad Rizal Ghani",
  "Mohammad Romano Diansyah",
  "Muhamad Akbar Nugroho",
  "Muhammad Fathinul Fikri Alhafid",
  "Niken Pratiwi",
  "Nikolaus Utomo",
  "Nosa A'la Almasykuri. K",
  "Okta Iskandar",
  "Oktavianus Gresasis Primantoro Putro",
  "Rahadian Tanjung Reddy",
  "Raissa Safira Utomo",
  "Ramadhani",
  "Rangga Yudhista Kuswandi",
  "Regha Putra Reynaldi",
  "Rida Purwanto",
  "Rio Oktafianto",
  "Rizki Andrian",
  "Rizky Ananda",
  "Rizky Andika",
  "Robert Yonanda",
  "Rona I Dona Vynaima. S",
  "Ruth Faomasinia Gea",
  "Sandjaja Putranto",
  "Shandy Sulistyanto",
  "Shannia Oktanuel A",
  "Stefanie Angelia",
  "Suratman",
  "Suwandi Kohar",
  "Syaiful Arief",
  "Tomi Efriansyah",
  "Tri Gumanto",
  "Tri Sumanadi",
  "Vinezha Panca",
  "Vinkent Gunawan",
  "Wayan Dana",
  "Widodo",
  "Wildan Istaqomudin",
  "Windy Alvianto",
  "Yudi Wibowo",
  "Zaenal Arifin",
];

const specialities = [
  "Cardiologist",
  "Dermatologist",
  "Endocrinologist",
  "Gastroenterologist",
  "Hematologist",
  "Neurologist",
  "Oncologist",
  "Pediatrician",
  "Psychiatrist",
  "Radiologist",
  "Urologist",
];

export const doctorList = namedList.map((name, index) => ({
  id: index + 1,
  name,
  speciality: specialities[Math.floor(Math.random() * specialities.length)],
}));
const splitDoctorList = (list, parts) => {
  const result = [];
  const length = Math.ceil(list.length / parts);
  for (let i = 0; i < parts; i++) {
    result.push(list.slice(i * length, (i + 1) * length));
  }
  return result;
};

export const doctorParts = splitDoctorList(doctorList, 5);

export const daylist = [
  { id: 1, name: "Monday", data: doctorParts[0] },
  { id: 2, name: "Tuesday", data: doctorParts[1] },
  { id: 3, name: "Wednesday", data: doctorParts[2] },
  { id: 4, name: "Thursday", data: doctorParts[3] },
  { id: 5, name: "Friday", data: doctorParts[4] },
];

export const getFirstAndLastName = (fullName) => {
  let nameParts = fullName.split(" ");
  if (nameParts.length === 1) {
    return nameParts[0];
  }
  return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
};

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
