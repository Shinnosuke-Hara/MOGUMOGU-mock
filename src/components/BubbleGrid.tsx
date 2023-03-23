import Image from 'next/image'
import { FC } from 'react'
import vis from 'vis-network'

const bubbleGridOptions = {
  nodes: {
    borderWidth: 0,
    shape: 'circle',
    color: {
      background: '#F92C55',
      highlight: { background: '#F92C55', border: '#F92C55' },
    },
    font: { color: '#fff' },
  },
  physics: {
    stabilization: false,
    minVelocity: 0.01,
    solver: 'repulsion',
    repulsion: {
      nodeDistance: 40,
    },
  },
}

type BubbleGridProps<T extends Array<any> = unknown[]> = {
  dataset: T
}

export const BubbleGrid: FC<BubbleGridProps> = ({ dataset }) => {
  const nodes = new vis.DataSet(dataset)
  const edges = new vis.DataSet()

  const data = {
    nodes,
    edges,
  }

  const container = document.createElement('div')

  const network = new vis.Network(container, data, bubbleGridOptions)

  return <>{container}</>
}
