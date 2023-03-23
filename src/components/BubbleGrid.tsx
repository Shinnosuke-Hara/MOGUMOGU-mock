import { FC, useEffect, useRef } from 'react'
import { Network, Options } from 'vis-network'
import Box from '@mui/material/Box'

const nodeSize = 75

const bubbleGridOptions: Options = {
  nodes: {
    shape: 'circle',
    color: {
      background: 'rgba(0,0,0,0)',
      border: 'rgba(0,0,0,0)',
    },
    chosen: false,
    font: { color: '#fff' },
    size: nodeSize,
  },
  physics: {
    stabilization: false,
    minVelocity: 0.01,
    solver: 'repulsion',
    repulsion: {
      nodeDistance: nodeSize * 0.55,
      springLength: 1000,
      damping: 0.2,
      centralGravity: 0.1,
    },
  },
  interaction: {
    zoomView: false,
    dragView: false,
    dragNodes: false,
  },
}

type BubbleGridProps<T extends Array<Genre> = Genre[]> = {
  dataset: T
}

export const BubbleGrid: FC<BubbleGridProps> = ({ dataset }) => {
  const visJsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!visJsRef.current) return

    const network = new Network(
      visJsRef.current,
      { nodes: dataset },
      bubbleGridOptions
    )

    const idList = dataset.map(({ id }) => id)
    const imageList = dataset.map(({ image }) => {
      const elem = new Image()
      elem.src = image || ''
      return elem
    })

    network.on('beforeDrawing', (ctx: CanvasRenderingContext2D) => {
      const positions = network.getPositions(idList)
      idList.map((id, i) => {
        const x = positions[id].x - nodeSize / 2
        const y = positions[id].y - nodeSize / 2

        ctx.save()
        ctx.beginPath()
        ctx.arc(
          x + nodeSize / 2,
          y + nodeSize / 2,
          nodeSize / 2,
          0,
          Math.PI * 2,
          false
        )
        ctx.strokeStyle = 'rgba(0,0,0,0)'
        ctx.stroke()
        ctx.clip()
        ctx.drawImage(imageList[i], x, y, nodeSize, nodeSize)
        ctx.fillStyle = 'rgba(249, 44, 85, 0.45)'
        ctx.fillRect(x, y, nodeSize, nodeSize)
        ctx.restore()
      })
    })
  }, [visJsRef, dataset])
  return (
    <Box
      ref={visJsRef}
      sx={{
        width: '100%',
        height: ' 100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  )
}
