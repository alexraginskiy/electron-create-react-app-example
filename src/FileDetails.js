import React from 'react'
import numeral from 'numeral'

const { statSync } = window.require('fs')
const path = window.require('path')

export default ({ file, onOpenDirectory }) => {
  if (!file) return null

  const stats = statSync(file)
  const isDir = stats.isDirectory()
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        {path.basename(file)}
        {' '}
        {isDir &&
          <span className="label label-default">Directory</span>
        }
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th width="1">Size</th>
            <td>{numeral(stats.size).format('0.00b')}</td>
          </tr>
          <tr>
            <th>Created</th>
            <td>{stats.ctime.toLocaleDateString()}</td>
          </tr>
          <tr>
            <th>Modified</th>
            <td>{stats.mtime.toLocaleDateString()}</td>
          </tr>
        </tbody>
      </table>
      {isDir &&
        <div className="panel-footer">
          <a onClick={() => onOpenDirectory(file)}>
            Open...
          </a>
        </div>
      }
    </div>
  )
}