/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Series from './Series'
import XAxisWidget from '../widget/XAxisWidget'
import XAxis from '../component/XAxis'

export default class XAxisSeries extends Series {
  _initBefore () {
    this._xAxis = new XAxis(this._chartData)
  }

  _createMainWidget (container, props) {
    return new XAxisWidget({ container, chartData: props.chartData, xAxis: this._xAxis })
  }

  _computeAxis () {
    this._xAxis.computeAxis()
  }

  xAxis () {
    return this._xAxis
  }

  setSize (mainWidgetSize, yAxisWidgetSize) {
    this._xAxis.setSize(mainWidgetSize.width, mainWidgetSize.height)
    this._computeAxis()
    super.setSize(mainWidgetSize, yAxisWidgetSize)
  }
}
