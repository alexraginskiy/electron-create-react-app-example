// Front-end imports
import React, { Component } from 'react'
import DirectoryHeader from './DirectoryHeader'
import FileList from './FileList'
import FileDetails from './FileDetails'

// Node imports
const remote = window.require('electron').remote
const { dialog } = remote
const Promise = window.require('bluebird')
const glob = Promise.promisify(window.require('glob'))

class App extends Component {
  state = {}

  handleClickOpen = () => {
    const dirs = dialog.showOpenDialog({ properties: [ 'openDirectory' ] })
    if (dirs && dirs.length) this.openDirectory(dirs[0])
  }

  handleOpenDirectory = (directory) => {
    this.openDirectory(directory)
  }

  openDirectory = async (currentDirectory) => {
    const files = await glob(`${currentDirectory}/*`)
    this.setState({ currentDirectory, files, selectedFile: undefined })
  }

  handleSelectFile = (selectedFile) => {
    this.setState({ selectedFile })
  }

  render() {
    const { currentDirectory, selectedFile, files } = this.state

    return (
      <div>
        <div className="container-fluid">
          <h1>File Browser</h1>
          {!currentDirectory &&
            <button
              className="btn btn-default"
              onClick={this.handleClickOpen}
            >
              Browse directory...
            </button>
          }

          <DirectoryHeader
            directory={currentDirectory}
            onOpenDirectory={this.handleOpenDirectory}
          />

          <div className="row">
            <div className="col-xs-6">
              <FileList
                currentDirectory={currentDirectory}
                files={files}
                onSelectFile={this.handleSelectFile}
              />
            </div>
            <div className="col-xs-6">
              <FileDetails
                file={selectedFile}
                onOpenDirectory={this.handleOpenDirectory}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
