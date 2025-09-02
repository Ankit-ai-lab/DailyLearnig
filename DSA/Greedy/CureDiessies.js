/* Cure a disease

Description
A new deadly virus has infected large population of a planet. Scientists have discovered a new strain of virus which can cure this disease. Vaccine produced from this virus has various strength.
A person is cured only if strength in vaccine batch is more than midichlorians count of person.
A doctor receives a new set of report which contains midichlorians count of each infected patient, You have all vaccine doctor has and their strengths. You need to determine if doctor can save all
patients with the vaccines he has. The number of vaccines and patients are equal. */

function Curedisease(n, Vpower, patients) {
    // Sort vaccines in descending order
    Vpower.sort((a, b) => b - a);
    // Sort patients in ascending order
    patients.sort((a, b) => a - b);

    // Iterate through patients and try to match with vaccines
    for (let i = 0; i < n; i++) {
        if (Vpower[i] <= patients[i]) {
            // If the vaccine strength is not greater than patient's midichlorian count
            console.log("No");
            return;
        }
    }
    
    // If all patients are matched with suitable vaccines
    console.log("Yes");
}

let Vaccine = [123, 146 ,454 ,542 ,456]
let patients = [321 ,234 ,654, 456 ,543]
Curedisease(5, Vaccine, patients);  