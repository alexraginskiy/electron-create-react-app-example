import React from 'react'

const path = window.require('path')

const parentDirectories = (directory) => (
  path.dirname(directory).split(path.sep)
)

const jumpToDir = (directory, index) => (
  parentDirectories(directory).slice(0, index + 1).join(path.sep)
)

export default ({ directory, onOpenDirectory }) => {
  if (!directory) return null

  return (
    <ol className="breadcrumb">
      {parentDirectories(directory).map((dir, i) => (
        <li key={i}>
          <a onClick={() => onOpenDirectory(jumpToDir(directory, i))}>
            {dir}
          </a>
        </li>
      ))}
      <li>
        {path.basename(directory)}
      </li>
    </ol>
  )
}