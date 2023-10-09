import './App.css'
import { OlosCognitoAuthProvider, IOlosCognitoAuth, OlosCognitoAuthForm } from "@olostecnologia/olos-cognito-auth"


const config:IOlosCognitoAuth = {

  appId: "1hd7h1lssk84q253mpu3kaeu21",
  xApiKey: "3EwVYhMYbLQ0qx9ynESP8nhB0=oZeXfRsy=qRR/-Rw9gt5g6wAICC?mD6r88WxRu",
  tenantId: "eaglle-ad",
  environment: "DEV",
  locale: "pt-BR"
}

function App() {


  return (
    <div className="App">
      
      <OlosCognitoAuthProvider configuration={config} >
        <OlosCognitoAuthForm />
      </OlosCognitoAuthProvider>
    </div>
    
    
  )
}

export default App;
