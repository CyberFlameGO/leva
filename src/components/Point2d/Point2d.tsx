import React, { useCallback } from 'react'
import { useTwixUpdate } from '../../hooks'
import { TwixInputProps } from '../../types'
import { NumberInner } from '../Number'
import { Row, Label } from '../styles'
import { Point2d as Point2dType, Point2dSettings } from './point2d-props'

type Point2dProps = TwixInputProps<Point2dType, Point2dSettings>

export function Point2d({ label, value, onUpdate, settings = { x: {}, y: {} } }: Point2dProps) {
  const { x, y } = value
  const { x: sx, y: sy } = settings!
  const setX = useCallback((x: number) => onUpdate({ ...value, x }), [onUpdate, value])
  const setY = useCallback((y: number) => onUpdate({ ...value, y }), [onUpdate, value])

  const numberX = useTwixUpdate({ type: 'NUMBER', value: x, set: setX, settings: sx })
  const numberY = useTwixUpdate({ type: 'NUMBER', value: y, set: setY, settings: sy })

  return (
    <Row grid>
      <Label>{label}</Label>
      <div>
        <NumberInner
          label="x"
          value={x}
          formattedValue={numberX.formattedValue}
          onUpdate={numberX.onUpdate}
          onChange={numberX.onChange}
          settings={numberX.settings}
        />
        <NumberInner
          label="y"
          value={y}
          formattedValue={numberY.formattedValue}
          onUpdate={numberY.onUpdate}
          onChange={numberY.onChange}
          settings={numberY.settings}
        />
      </div>
    </Row>
  )
}
