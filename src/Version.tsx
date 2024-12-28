import './App.css'
import packageJson from '../package.json'

function Version() {
    const version = packageJson.version
    return (
        <>
            <h1>Version {version}</h1>
        </>
    )
}

export default Version