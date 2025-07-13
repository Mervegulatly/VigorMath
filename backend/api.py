from fastapi import FastAPI, Path, HTTPException  
from typing import Optional
from pydantic import BaseModel

app = FastAPI()   # uvicorn myapi:app --reload

# "localhost/delete-user"  "amazon.com/create-user"  this is basically endpoint

# GET    = get an info
# POST   = create something new
# PUT    = update
# DELETE = delete something

patients = {
    1 : {
        "name" : "Merve",
        "age" : 23,
        "year": 2023
    }
}

class Patient(BaseModel):
    name : str
    age : int
    year : str

class UpdatePatient(BaseModel):
    name : Optional[str] = None
    age : Optional[int] = None
    year : Optional[str] = None 

@app.get("/")
def index():
    return{"name": "First Data"}

@app.get("/get-patient/{patient_id}")
def get_patient(
    patient_id : int = Path(..., description = "The ID of the patient you want to view", gt=0, lt=3)):  # Allow for more details  gt and lt min-max values

    #if patient_id not in patient:
    #    raise HTTPException(status_code=404, detail="Patient not found")
    return patients[patient_id]

@app.get("/get-by-name/{patient_id}")
def get_patient(*, patient_id : int, name : Optional[str] = None, test : int): 
    for patient_id in patients:
        if patients[patient_id]["name"] == name :
            return patients[patient_id]
    return {"Data" : "not found"}

@app.post("/create-patient/{patient_id}")
def create_patient(patient_id : int, patient : Patient):
    if patient_id in patients:
        return {"Error" : "Patient exists"}
    
    patients[patient_id] = patient.model_dump()
    return patients[patient_id]

@app.put("/update-patient/{patient_id}")
def update_patient(patient_id : int, patient : UpdatePatient):
    if patient_id not in patients:
        return{"Error" : "Patient does not exists"}
    
    if patient.name != None:
        patients[patient_id]["name"] = patient.name

    if patient.age != None:
        patients[patient_id]["age"] = patient.age
    
    if patient.year != None:
        patients[patient_id]["year"] = patient.year

    return patients[patient_id]

@app.delete("/delete-patient/{patient_id}")
def delete_patient(patient_id : int):
    if patient_id not in patients:
        return{"Error" : "Patient does not exists"}
    
    del patients[patient_id]
    return {"Message" : "Patient deleted successfully"}