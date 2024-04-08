import React from 'react';
import './App.css';
import ReactDataSheet from 'react-datasheet';
import './styles.css';
import { Paper } from '@mui/material';
import { ActionButton, ChoiceGroup, IChoiceGroupOption, ILabelStyles, IStackTokens, IStyleSet, Label, Pivot, PivotItem, PrimaryButton, Spinner, SpinnerSize, Stack, TextField } from '@fluentui/react';
import SelectEditor from './Select';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { LatViewer, LongViewer } from './FillViewer';
import axios from "axios";
import { saveAs } from 'file-saver';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

initializeIcons();
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
const sampleData = {
  "Author": {
    "ID": 6,
    "EMail": "tuannda@controlunion.com",
    "Title": "Tuan Nguyen Dao Anh"
  },
  "Editor": {
    "ID": 6,
    "EMail": "tuannda@controlunion.com",
    "Title": "Tuan Nguyen Dao Anh"
  },
  "SampleType": {
    "ID": 7,
    "Title": "Sugar"
  },
  "Client": {
    "ID": 1,
    "Title": "CL001",
    "CompanyName": "LASER SOLUTIONS LIMITED",
    "Contactperson": null,
    "Email": null,
    "Phone": null,
    "Address": "HCM city"
  },
  "Department": {
    "ID": 1,
    "Title": "General",
    "ContactName": "PAUL NYOIKE",
    "Phone": "0722252571",
    "Email": "nyoikee@gmail.com"
  },
  "Id": 19,
  "ID": 19,
  "Title": "CUV/0001-06/22",
  "Modified": "2022-06-09",
  "Received": "2022-06-08",
  "OfferReference": null,
  "UrgentSample": true,
  "ReportingDate": "2022-06-19",
  "SampleName": "Sugar",
  "SampleWeight": "100g",
  "TestMethods": "Lab",
  "Sealcode": null,
  "ReferenceID": "ClientID123",
  "Additionalemark": null,
  "SamplingDate": "2022-06-08",
  "SamplingKind": null,
  "SamplingAt": null,
  "ProductRecognizedAs": "Sugar",
  "Packing": null,
  "LabRemark": null,
  "AWB": null,
  "Specifications": null,
  "Subcontracted": false,
  "Status": "Approved",
  "Description": null,
  "Files": "/sites/cukenyalab/Shared Documents/CU Logo-1654673651763.png;",
  "StatusCode": "Approved",
  "Quantity": null,
  "DisposalDate": "2022-07-29",
  "ActualReportingDate": "2022-07-29",
  "NeedApprove": true,
  "MICROBIOLOGY": false,
  "CHEMISTRY": false,
  "Invoid": false,
  "TestReport": false,
  "SUBMICROBIOLOGY": false,
  "SUBCHEMISTRY": false,
  "CustomProperty": "{\"SampleReceiveBy\":\"Tuan\",\"Sufficient\":\"Yes\",\"Packaging\":\"Sealed\",\"NatureOfSample\":\" Solid\",\"ModeOfSampleReceived\":\"By hand\",\"StorageCondition\":\"Ambient\",\"SampleConditionSuitableForAnalysis\":\"Yes\",\"StandardReferenceMethod\":\"Test Standard Reference method\",\"ReportDelivery\":\"E-Mail;#Courier\",\"PaymentCondition\":\"Contract\"}",
  "Detail": {
    "value": [
      {
        "Editor": {
          "ID": 40,
          "EMail": "egitonga@controlunion.com",
          "Title": "Emily Gitonga"
        },
        "Sample": {
          "ID": 28
        },
        "Paramater": {
          "ID": 2,
          "Title": "Crude Fiber",
          "Group": null,
          "TestID": "CH002",
          "Remark": null
        },
        "Method": {
          "ID": 2,
          "Title": "ISO 6865 :2000"
        },
        "Implementer": {
          "ID": 40,
          "EMail": "egitonga@controlunion.com",
          "Title": "Emily Gitonga"
        },
        "Id": 58,
        "ID": 58,
        "Title": "CHEMISTRY",
        "Modified": "2022-08-12T13:49:32Z",
        "USDPrice": null,
        "VNDPrice": null,
        "Result": "1.4",
        "Status": null,
        "DueDate": null,
        "Remark": null,
        "Subcontracted": false,
        "ReportDate": "2022-08-12T13:16:19Z",
        "Unit": "%",
        "Files": null,
        "Index": 0.0,
        "Uncertainty": null,
        "ISO": false,
        "Limits": "7% Max"
      },
      {
        "Editor": {
          "ID": 40,
          "EMail": "egitonga@controlunion.com",
          "Title": "Emily Gitonga"
        },
        "Sample": {
          "ID": 28
        },
        "Paramater": {
          "ID": 4,
          "Title": "Moisture content",
          "Group": null,
          "TestID": "CH004",
          "Remark": null
        },
        "Method": {
          "ID": 4,
          "Title": "ISO 6496"
        },
        "Implementer": {
          "ID": 40,
          "EMail": "egitonga@controlunion.com",
          "Title": "Emily Gitonga"
        },
        "Id": 59,
        "ID": 59,
        "Title": "CHEMISTRY",
        "Modified": "2022-08-12T13:50:15Z",
        "USDPrice": null,
        "VNDPrice": null,
        "Result": "8.97",
        "Status": null,
        "DueDate": null,
        "Remark": null,
        "Subcontracted": false,
        "ReportDate": "2022-08-12T13:48:03Z",
        "Unit": "%",
        "Files": null,
        "Index": 1.0,
        "Uncertainty": null,
        "ISO": false,
        "Limits": "13% Min"
      },
      {
        "Editor": {
          "ID": 40,
          "EMail": "egitonga@controlunion.com",
          "Title": "Emily Gitonga"
        },
        "Sample": {
          "ID": 28
        },
        "Paramater": {
          "ID": 5,
          "Title": "Fat content",
          "Group": null,
          "TestID": "CH005",
          "Remark": null
        },
        "Method": {
          "ID": 5,
          "Title": "ISO 6492"
        },
        "Implementer": {
          "ID": 40,
          "EMail": "egitonga@controlunion.com",
          "Title": "Emily Gitonga"
        },
        "Id": 60,
        "ID": 60,
        "Title": "CHEMISTRY",
        "Modified": "2022-08-12",
        "USDPrice": null,
        "VNDPrice": null,
        "Result": "4.97",
        "Status": null,
        "DueDate": null,
        "Remark": null,
        "Subcontracted": false,
        "ReportDate": "2022-08-12",
        "Unit": "%",
        "Files": null,
        "Index": 2.0,
        "Uncertainty": null,
        "ISO": false,
        "Limits": "8% Min"
      }
    ]
  }
};

enum FileType {
  word = "word",
  pdf = "pdf",
  excel = "excel",
}


const options: IChoiceGroupOption[] = [
  { key: FileType.word, text: FileType.word, iconProps: { iconName: 'WordDocument' } },
  { key: FileType.pdf, text: FileType.pdf, iconProps: { iconName: 'PDF' } },
];

function App() {

  const refInput = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const refEditor = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const refEditor2 = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const [currentFile, setCurrentFile] = React.useState<any>();

  const [fileType, setFileType] = React.useState<FileType>(FileType.pdf);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [anaRes, setAnaRes] = React.useState<any>({});

  const dataref = React.useRef<any>(JSON.stringify(sampleData));
  const fileRef = React.useRef<any>();
  const prompt = React.useRef<string>(`You are an assistant designed to extract entities from an Image. 
  Users will upload an image and you will respond with entities you've extracted from the image as a image as an Json object .Begin your response with {. 
  The Output of Json format have some the following key:
  - InvoiceNumber
  - Supplier
  - Address
  - TransactionDate
  - Category
  - SubCategory
  - Unit
  - Amount
  - Payment
  - ReportAmount
  - Tax
  
  InvoiceNumber: return string
  Supplier: return string
  Address: return string
  TransactionDate: return ios string
  Category: I define below. In an invoice, only take 1 single classification
  *CategoryList
  SubCategory: Corresponding to each Category, we have array of SubCategories, return the corresponding Json of SubCategory in array of SubCategories
  Unit: Currency Unit, return string, code according to ISO 4217
  Amount: return string
  Payment: Payment Method, return string, one of the following 3 values: Cash, Credit, Company Credit
  ReportAmount: Based on Amount, Unit and current currency exchange rates to calculate ReportAmount in *ReportUnit unit
  Tax: return string`);

  React.useLayoutEffect(
    () => {
      const options = {
        mode: 'code',
        onChangeText: (value: any) => {
          dataref.current = value;
        }
      };
      const jsoneditor = new JSONEditor(refEditor.current, options as any);
      jsoneditor.set(sampleData);
      return () => {
        jsoneditor.destroy();
      }
    }, []
  );

  React.useLayoutEffect(
    () => {
      const options = {
        mode: 'code',
      };
      const jsoneditor = new JSONEditor(refEditor2.current, options as any);
      jsoneditor.set(anaRes);
      return () => {
        jsoneditor.destroy();
      }
    }, [anaRes]
  );

  const onChangeHandler = (event: any) => {
    console.log("file change");
    const file = event.target.files[0];
    setCurrentFile(file);
    event.target.value = null;

  };
  return (
    <div style={{ width: "100%", padding: "30px", boxSizing: "border-box" }}>
      <>
        <h1>Testing API CU VN</h1>
        <div>
          <div className="jsoneditor-react-container" style={{ height: "500px" }} ref={refEditor} />
        </div>
        <div>
          <a target={"_blank"}
            href="https://pcugroup-my.sharepoint.com/:w:/p/phuhb/EQurv-ucv5FGvM6Yi9wsFwYByRDasOMpOZqdInnG0OxLrA?e=0njcNv">
            Dowload word template
          </a>
        </div>
        <ChoiceGroup label="Result file type" defaultSelectedKey={FileType.pdf} options={options} onChange={(e, value) => {
          setFileType(value?.key as FileType | FileType.pdf);
        }} />
        <ActionButton
          onClick={() => {
            refInput.current.click();
          }}
          iconProps={{ iconName: 'OpenFile' }} >Update word file asdasdsa {currentFile ? `: ${currentFile.name}` : ""}</ActionButton>
        <input type="file" style={{ display: "none" }}
          name="fileForLab" accept='.xlsx' ref={refInput} onChange={(e) => onChangeHandler(e)} />
        <div>
          <PrimaryButton disabled={loading} text="Ok"
            onClick={() => {
              if (currentFile != null) {
                setLoading(true);
                const formData = new FormData();
                formData.append("FormFile", currentFile);
                formData.append("FileName", currentFile.name);
                formData.append("DataToReplace", dataref.current);
                formData.append("FileType", fileType);
                try {
                  const config = { responseType: "blob" };
                  const res = axios.post("http://localhost:7279/api/DocumentProcessing", formData, config as any).then(
                    result => {
                      const file2 = new Blob([result.data], { type: result.headers["content-type"] });
                      saveAs(file2, fileType == FileType.pdf ? currentFile.name.replace(".docx", ".pdf") : currentFile.name);
                      setLoading(false);
                    }
                  );
                  console.log(res);
                } catch (ex) {
                  setLoading(false);
                  console.log(ex);
                }
              }
              else {
                alert("Pls upload file ");
              }
            }} allowDisabledFocus />
          {
            loading &&
            <Spinner size={SpinnerSize.xSmall} />
          }
        </div>
      </>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h1>Testing Image Vision</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <TextField
            label='Prompt'
            multiline
            rows={20}
            defaultValue={prompt.current}
            onChange={(e, value) => {
              prompt.current = value || ""
            }}
          ></TextField>


          <div >
            <Label>Result</Label>
            <div style={{ height: '350px' }} className="jsoneditor-react-container" ref={refEditor2} />
          </div>
        </div>

        <input type="file"
          accept="image/png, image/jpeg, image/gif, application/pdf"
          onChange={(e: any) => {
            const [file] = e.target.files;
            fileRef.current = file;
          }}
        ></input>
        <div style={{ display: 'flex' }}>
          <PrimaryButton style={{ width: '100px' }} disabled={loading}
            onClick={() => {
              setLoading(true);
              const formData = new FormData();
              formData.append('promptString', prompt.current);
              formData.append('file', fileRef.current, 'filename.jpg');
              axios.post('http://localhost:7176/api/GPT4Vision', formData)
                .then(resultAnlayze => {
                  setAnaRes(resultAnlayze)
                  setLoading(false);
                })
            }} allowDisabledFocus >
            Analyse
          </PrimaryButton>
          {
            loading &&
            <Spinner size={SpinnerSize.xSmall} />
          }
        </div>

      </div>


    </div>
  );
}

export default App;
