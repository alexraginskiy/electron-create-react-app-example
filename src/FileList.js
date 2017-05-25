import React from 'react'
const path = window.require('path')

export default ({ files = [], onSelectFile }) => (
  <table className="table table-hover">
    <tbody>
      {files.map(file => (
        <tr onClick={() => onSelectFile(file)}>
          <td>{path.basename(file)}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
