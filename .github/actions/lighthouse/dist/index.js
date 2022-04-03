import { createRequire as e } from 'module'
var t = {
  302: function (e, t, r) {
    var n =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, n) {
            if (n === undefined) n = r
            Object.defineProperty(e, n, {
              enumerable: true,
              get: function () {
                return t[r]
              }
            })
          }
        : function (e, t, r, n) {
            if (n === undefined) n = r
            e[n] = t[r]
          })
    var o =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, 'default', { enumerable: true, value: t })
          }
        : function (e, t) {
            e['default'] = t
          })
    var s =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e
        var t = {}
        if (e != null) for (var r in e) if (r !== 'default' && Object.hasOwnProperty.call(e, r)) n(t, e, r)
        o(t, e)
        return t
      }
    Object.defineProperty(t, '__esModule', { value: true })
    t.issue = t.issueCommand = void 0
    const i = s(r(37))
    const a = r(541)
    function issueCommand(e, t, r) {
      const n = new Command(e, t, r)
      process.stdout.write(n.toString() + i.EOL)
    }
    t.issueCommand = issueCommand
    function issue(e, t = '') {
      issueCommand(e, {}, t)
    }
    t.issue = issue
    const u = '::'
    class Command {
      constructor(e, t, r) {
        if (!e) {
          e = 'missing.command'
        }
        this.command = e
        this.properties = t
        this.message = r
      }
      toString() {
        let e = u + this.command
        if (this.properties && Object.keys(this.properties).length > 0) {
          e += ' '
          let t = true
          for (const r in this.properties) {
            if (this.properties.hasOwnProperty(r)) {
              const n = this.properties[r]
              if (n) {
                if (t) {
                  t = false
                } else {
                  e += ','
                }
                e += `${r}=${escapeProperty(n)}`
              }
            }
          }
        }
        e += `${u}${escapeData(this.message)}`
        return e
      }
    }
    function escapeData(e) {
      return a.toCommandValue(e).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A')
    }
    function escapeProperty(e) {
      return a
        .toCommandValue(e)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C')
    }
  },
  31: function (e, t, r) {
    var n =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, n) {
            if (n === undefined) n = r
            Object.defineProperty(e, n, {
              enumerable: true,
              get: function () {
                return t[r]
              }
            })
          }
        : function (e, t, r, n) {
            if (n === undefined) n = r
            e[n] = t[r]
          })
    var o =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, 'default', { enumerable: true, value: t })
          }
        : function (e, t) {
            e['default'] = t
          })
    var s =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e
        var t = {}
        if (e != null) for (var r in e) if (r !== 'default' && Object.hasOwnProperty.call(e, r)) n(t, e, r)
        o(t, e)
        return t
      }
    var i =
      (this && this.__awaiter) ||
      function (e, t, r, n) {
        function adopt(e) {
          return e instanceof r
            ? e
            : new r(function (t) {
                t(e)
              })
        }
        return new (r || (r = Promise))(function (r, o) {
          function fulfilled(e) {
            try {
              step(n.next(e))
            } catch (e) {
              o(e)
            }
          }
          function rejected(e) {
            try {
              step(n['throw'](e))
            } catch (e) {
              o(e)
            }
          }
          function step(e) {
            e.done ? r(e.value) : adopt(e.value).then(fulfilled, rejected)
          }
          step((n = n.apply(e, t || [])).next())
        })
      }
    Object.defineProperty(t, '__esModule', { value: true })
    t.getIDToken =
      t.getState =
      t.saveState =
      t.group =
      t.endGroup =
      t.startGroup =
      t.info =
      t.notice =
      t.warning =
      t.error =
      t.debug =
      t.isDebug =
      t.setFailed =
      t.setCommandEcho =
      t.setOutput =
      t.getBooleanInput =
      t.getMultilineInput =
      t.getInput =
      t.addPath =
      t.setSecret =
      t.exportVariable =
      t.ExitCode =
        void 0
    const a = r(302)
    const u = r(234)
    const l = r(541)
    const c = s(r(37))
    const p = s(r(17))
    const d = r(946)
    var f
    ;(function (e) {
      e[(e['Success'] = 0)] = 'Success'
      e[(e['Failure'] = 1)] = 'Failure'
    })((f = t.ExitCode || (t.ExitCode = {})))
    function exportVariable(e, t) {
      const r = l.toCommandValue(t)
      process.env[e] = r
      const n = process.env['GITHUB_ENV'] || ''
      if (n) {
        const t = '_GitHubActionsFileCommandDelimeter_'
        const n = `${e}<<${t}${c.EOL}${r}${c.EOL}${t}`
        u.issueCommand('ENV', n)
      } else {
        a.issueCommand('set-env', { name: e }, r)
      }
    }
    t.exportVariable = exportVariable
    function setSecret(e) {
      a.issueCommand('add-mask', {}, e)
    }
    t.setSecret = setSecret
    function addPath(e) {
      const t = process.env['GITHUB_PATH'] || ''
      if (t) {
        u.issueCommand('PATH', e)
      } else {
        a.issueCommand('add-path', {}, e)
      }
      process.env['PATH'] = `${e}${p.delimiter}${process.env['PATH']}`
    }
    t.addPath = addPath
    function getInput(e, t) {
      const r = process.env[`INPUT_${e.replace(/ /g, '_').toUpperCase()}`] || ''
      if (t && t.required && !r) {
        throw new Error(`Input required and not supplied: ${e}`)
      }
      if (t && t.trimWhitespace === false) {
        return r
      }
      return r.trim()
    }
    t.getInput = getInput
    function getMultilineInput(e, t) {
      const r = getInput(e, t)
        .split('\n')
        .filter(e => e !== '')
      return r
    }
    t.getMultilineInput = getMultilineInput
    function getBooleanInput(e, t) {
      const r = ['true', 'True', 'TRUE']
      const n = ['false', 'False', 'FALSE']
      const o = getInput(e, t)
      if (r.includes(o)) return true
      if (n.includes(o)) return false
      throw new TypeError(
        `Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n` +
          `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``
      )
    }
    t.getBooleanInput = getBooleanInput
    function setOutput(e, t) {
      process.stdout.write(c.EOL)
      a.issueCommand('set-output', { name: e }, t)
    }
    t.setOutput = setOutput
    function setCommandEcho(e) {
      a.issue('echo', e ? 'on' : 'off')
    }
    t.setCommandEcho = setCommandEcho
    function setFailed(e) {
      process.exitCode = f.Failure
      error(e)
    }
    t.setFailed = setFailed
    function isDebug() {
      return process.env['RUNNER_DEBUG'] === '1'
    }
    t.isDebug = isDebug
    function debug(e) {
      a.issueCommand('debug', {}, e)
    }
    t.debug = debug
    function error(e, t = {}) {
      a.issueCommand('error', l.toCommandProperties(t), e instanceof Error ? e.toString() : e)
    }
    t.error = error
    function warning(e, t = {}) {
      a.issueCommand('warning', l.toCommandProperties(t), e instanceof Error ? e.toString() : e)
    }
    t.warning = warning
    function notice(e, t = {}) {
      a.issueCommand('notice', l.toCommandProperties(t), e instanceof Error ? e.toString() : e)
    }
    t.notice = notice
    function info(e) {
      process.stdout.write(e + c.EOL)
    }
    t.info = info
    function startGroup(e) {
      a.issue('group', e)
    }
    t.startGroup = startGroup
    function endGroup() {
      a.issue('endgroup')
    }
    t.endGroup = endGroup
    function group(e, t) {
      return i(this, void 0, void 0, function* () {
        startGroup(e)
        let r
        try {
          r = yield t()
        } finally {
          endGroup()
        }
        return r
      })
    }
    t.group = group
    function saveState(e, t) {
      a.issueCommand('save-state', { name: e }, t)
    }
    t.saveState = saveState
    function getState(e) {
      return process.env[`STATE_${e}`] || ''
    }
    t.getState = getState
    function getIDToken(e) {
      return i(this, void 0, void 0, function* () {
        return yield d.OidcClient.getIDToken(e)
      })
    }
    t.getIDToken = getIDToken
  },
  234: function (e, t, r) {
    var n =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, n) {
            if (n === undefined) n = r
            Object.defineProperty(e, n, {
              enumerable: true,
              get: function () {
                return t[r]
              }
            })
          }
        : function (e, t, r, n) {
            if (n === undefined) n = r
            e[n] = t[r]
          })
    var o =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, 'default', { enumerable: true, value: t })
          }
        : function (e, t) {
            e['default'] = t
          })
    var s =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e
        var t = {}
        if (e != null) for (var r in e) if (r !== 'default' && Object.hasOwnProperty.call(e, r)) n(t, e, r)
        o(t, e)
        return t
      }
    Object.defineProperty(t, '__esModule', { value: true })
    t.issueCommand = void 0
    const i = s(r(147))
    const a = s(r(37))
    const u = r(541)
    function issueCommand(e, t) {
      const r = process.env[`GITHUB_${e}`]
      if (!r) {
        throw new Error(`Unable to find environment variable for file command ${e}`)
      }
      if (!i.existsSync(r)) {
        throw new Error(`Missing file at path: ${r}`)
      }
      i.appendFileSync(r, `${u.toCommandValue(t)}${a.EOL}`, { encoding: 'utf8' })
    }
    t.issueCommand = issueCommand
  },
  946: function (e, t, r) {
    var n =
      (this && this.__awaiter) ||
      function (e, t, r, n) {
        function adopt(e) {
          return e instanceof r
            ? e
            : new r(function (t) {
                t(e)
              })
        }
        return new (r || (r = Promise))(function (r, o) {
          function fulfilled(e) {
            try {
              step(n.next(e))
            } catch (e) {
              o(e)
            }
          }
          function rejected(e) {
            try {
              step(n['throw'](e))
            } catch (e) {
              o(e)
            }
          }
          function step(e) {
            e.done ? r(e.value) : adopt(e.value).then(fulfilled, rejected)
          }
          step((n = n.apply(e, t || [])).next())
        })
      }
    Object.defineProperty(t, '__esModule', { value: true })
    t.OidcClient = void 0
    const o = r(875)
    const s = r(760)
    const i = r(31)
    class OidcClient {
      static createHttpClient(e = true, t = 10) {
        const r = { allowRetries: e, maxRetries: t }
        return new o.HttpClient('actions/oidc-client', [new s.BearerCredentialHandler(OidcClient.getRequestToken())], r)
      }
      static getRequestToken() {
        const e = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN']
        if (!e) {
          throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable')
        }
        return e
      }
      static getIDTokenUrl() {
        const e = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
        if (!e) {
          throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable')
        }
        return e
      }
      static getCall(e) {
        var t
        return n(this, void 0, void 0, function* () {
          const r = OidcClient.createHttpClient()
          const n = yield r.getJson(e).catch(e => {
            throw new Error(
              `Failed to get ID Token. \n \n        Error Code : ${e.statusCode}\n \n        Error Message: ${e.result.message}`
            )
          })
          const o = (t = n.result) === null || t === void 0 ? void 0 : t.value
          if (!o) {
            throw new Error('Response json body do not have ID Token field')
          }
          return o
        })
      }
      static getIDToken(e) {
        return n(this, void 0, void 0, function* () {
          try {
            let t = OidcClient.getIDTokenUrl()
            if (e) {
              const r = encodeURIComponent(e)
              t = `${t}&audience=${r}`
            }
            i.debug(`ID token url is ${t}`)
            const r = yield OidcClient.getCall(t)
            i.setSecret(r)
            return r
          } catch (e) {
            throw new Error(`Error message: ${e.message}`)
          }
        })
      }
    }
    t.OidcClient = OidcClient
  },
  541: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true })
    t.toCommandProperties = t.toCommandValue = void 0
    function toCommandValue(e) {
      if (e === null || e === undefined) {
        return ''
      } else if (typeof e === 'string' || e instanceof String) {
        return e
      }
      return JSON.stringify(e)
    }
    t.toCommandValue = toCommandValue
    function toCommandProperties(e) {
      if (!Object.keys(e).length) {
        return {}
      }
      return {
        title: e.title,
        file: e.file,
        line: e.startLine,
        endLine: e.endLine,
        col: e.startColumn,
        endColumn: e.endColumn
      }
    }
    t.toCommandProperties = toCommandProperties
  },
  760: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true })
    class BasicCredentialHandler {
      constructor(e, t) {
        this.username = e
        this.password = t
      }
      prepareRequest(e) {
        e.headers['Authorization'] = 'Basic ' + Buffer.from(this.username + ':' + this.password).toString('base64')
      }
      canHandleAuthentication(e) {
        return false
      }
      handleAuthentication(e, t, r) {
        return null
      }
    }
    t.BasicCredentialHandler = BasicCredentialHandler
    class BearerCredentialHandler {
      constructor(e) {
        this.token = e
      }
      prepareRequest(e) {
        e.headers['Authorization'] = 'Bearer ' + this.token
      }
      canHandleAuthentication(e) {
        return false
      }
      handleAuthentication(e, t, r) {
        return null
      }
    }
    t.BearerCredentialHandler = BearerCredentialHandler
    class PersonalAccessTokenCredentialHandler {
      constructor(e) {
        this.token = e
      }
      prepareRequest(e) {
        e.headers['Authorization'] = 'Basic ' + Buffer.from('PAT:' + this.token).toString('base64')
      }
      canHandleAuthentication(e) {
        return false
      }
      handleAuthentication(e, t, r) {
        return null
      }
    }
    t.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler
  },
  875: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: true })
    const n = r(685)
    const o = r(687)
    const s = r(502)
    let i
    var a
    ;(function (e) {
      e[(e['OK'] = 200)] = 'OK'
      e[(e['MultipleChoices'] = 300)] = 'MultipleChoices'
      e[(e['MovedPermanently'] = 301)] = 'MovedPermanently'
      e[(e['ResourceMoved'] = 302)] = 'ResourceMoved'
      e[(e['SeeOther'] = 303)] = 'SeeOther'
      e[(e['NotModified'] = 304)] = 'NotModified'
      e[(e['UseProxy'] = 305)] = 'UseProxy'
      e[(e['SwitchProxy'] = 306)] = 'SwitchProxy'
      e[(e['TemporaryRedirect'] = 307)] = 'TemporaryRedirect'
      e[(e['PermanentRedirect'] = 308)] = 'PermanentRedirect'
      e[(e['BadRequest'] = 400)] = 'BadRequest'
      e[(e['Unauthorized'] = 401)] = 'Unauthorized'
      e[(e['PaymentRequired'] = 402)] = 'PaymentRequired'
      e[(e['Forbidden'] = 403)] = 'Forbidden'
      e[(e['NotFound'] = 404)] = 'NotFound'
      e[(e['MethodNotAllowed'] = 405)] = 'MethodNotAllowed'
      e[(e['NotAcceptable'] = 406)] = 'NotAcceptable'
      e[(e['ProxyAuthenticationRequired'] = 407)] = 'ProxyAuthenticationRequired'
      e[(e['RequestTimeout'] = 408)] = 'RequestTimeout'
      e[(e['Conflict'] = 409)] = 'Conflict'
      e[(e['Gone'] = 410)] = 'Gone'
      e[(e['TooManyRequests'] = 429)] = 'TooManyRequests'
      e[(e['InternalServerError'] = 500)] = 'InternalServerError'
      e[(e['NotImplemented'] = 501)] = 'NotImplemented'
      e[(e['BadGateway'] = 502)] = 'BadGateway'
      e[(e['ServiceUnavailable'] = 503)] = 'ServiceUnavailable'
      e[(e['GatewayTimeout'] = 504)] = 'GatewayTimeout'
    })((a = t.HttpCodes || (t.HttpCodes = {})))
    var u
    ;(function (e) {
      e['Accept'] = 'accept'
      e['ContentType'] = 'content-type'
    })((u = t.Headers || (t.Headers = {})))
    var l
    ;(function (e) {
      e['ApplicationJson'] = 'application/json'
    })((l = t.MediaTypes || (t.MediaTypes = {})))
    function getProxyUrl(e) {
      let t = s.getProxyUrl(new URL(e))
      return t ? t.href : ''
    }
    t.getProxyUrl = getProxyUrl
    const c = [a.MovedPermanently, a.ResourceMoved, a.SeeOther, a.TemporaryRedirect, a.PermanentRedirect]
    const p = [a.BadGateway, a.ServiceUnavailable, a.GatewayTimeout]
    const d = ['OPTIONS', 'GET', 'DELETE', 'HEAD']
    const f = 10
    const h = 5
    class HttpClientError extends Error {
      constructor(e, t) {
        super(e)
        this.name = 'HttpClientError'
        this.statusCode = t
        Object.setPrototypeOf(this, HttpClientError.prototype)
      }
    }
    t.HttpClientError = HttpClientError
    class HttpClientResponse {
      constructor(e) {
        this.message = e
      }
      readBody() {
        return new Promise(async (e, t) => {
          let r = Buffer.alloc(0)
          this.message.on('data', e => {
            r = Buffer.concat([r, e])
          })
          this.message.on('end', () => {
            e(r.toString())
          })
        })
      }
    }
    t.HttpClientResponse = HttpClientResponse
    function isHttps(e) {
      let t = new URL(e)
      return t.protocol === 'https:'
    }
    t.isHttps = isHttps
    class HttpClient {
      constructor(e, t, r) {
        this._ignoreSslError = false
        this._allowRedirects = true
        this._allowRedirectDowngrade = false
        this._maxRedirects = 50
        this._allowRetries = false
        this._maxRetries = 1
        this._keepAlive = false
        this._disposed = false
        this.userAgent = e
        this.handlers = t || []
        this.requestOptions = r
        if (r) {
          if (r.ignoreSslError != null) {
            this._ignoreSslError = r.ignoreSslError
          }
          this._socketTimeout = r.socketTimeout
          if (r.allowRedirects != null) {
            this._allowRedirects = r.allowRedirects
          }
          if (r.allowRedirectDowngrade != null) {
            this._allowRedirectDowngrade = r.allowRedirectDowngrade
          }
          if (r.maxRedirects != null) {
            this._maxRedirects = Math.max(r.maxRedirects, 0)
          }
          if (r.keepAlive != null) {
            this._keepAlive = r.keepAlive
          }
          if (r.allowRetries != null) {
            this._allowRetries = r.allowRetries
          }
          if (r.maxRetries != null) {
            this._maxRetries = r.maxRetries
          }
        }
      }
      options(e, t) {
        return this.request('OPTIONS', e, null, t || {})
      }
      get(e, t) {
        return this.request('GET', e, null, t || {})
      }
      del(e, t) {
        return this.request('DELETE', e, null, t || {})
      }
      post(e, t, r) {
        return this.request('POST', e, t, r || {})
      }
      patch(e, t, r) {
        return this.request('PATCH', e, t, r || {})
      }
      put(e, t, r) {
        return this.request('PUT', e, t, r || {})
      }
      head(e, t) {
        return this.request('HEAD', e, null, t || {})
      }
      sendStream(e, t, r, n) {
        return this.request(e, t, r, n)
      }
      async getJson(e, t = {}) {
        t[u.Accept] = this._getExistingOrDefaultHeader(t, u.Accept, l.ApplicationJson)
        let r = await this.get(e, t)
        return this._processResponse(r, this.requestOptions)
      }
      async postJson(e, t, r = {}) {
        let n = JSON.stringify(t, null, 2)
        r[u.Accept] = this._getExistingOrDefaultHeader(r, u.Accept, l.ApplicationJson)
        r[u.ContentType] = this._getExistingOrDefaultHeader(r, u.ContentType, l.ApplicationJson)
        let o = await this.post(e, n, r)
        return this._processResponse(o, this.requestOptions)
      }
      async putJson(e, t, r = {}) {
        let n = JSON.stringify(t, null, 2)
        r[u.Accept] = this._getExistingOrDefaultHeader(r, u.Accept, l.ApplicationJson)
        r[u.ContentType] = this._getExistingOrDefaultHeader(r, u.ContentType, l.ApplicationJson)
        let o = await this.put(e, n, r)
        return this._processResponse(o, this.requestOptions)
      }
      async patchJson(e, t, r = {}) {
        let n = JSON.stringify(t, null, 2)
        r[u.Accept] = this._getExistingOrDefaultHeader(r, u.Accept, l.ApplicationJson)
        r[u.ContentType] = this._getExistingOrDefaultHeader(r, u.ContentType, l.ApplicationJson)
        let o = await this.patch(e, n, r)
        return this._processResponse(o, this.requestOptions)
      }
      async request(e, t, r, n) {
        if (this._disposed) {
          throw new Error('Client has already been disposed.')
        }
        let o = new URL(t)
        let s = this._prepareRequest(e, o, n)
        let i = this._allowRetries && d.indexOf(e) != -1 ? this._maxRetries + 1 : 1
        let u = 0
        let l
        while (u < i) {
          l = await this.requestRaw(s, r)
          if (l && l.message && l.message.statusCode === a.Unauthorized) {
            let e
            for (let t = 0; t < this.handlers.length; t++) {
              if (this.handlers[t].canHandleAuthentication(l)) {
                e = this.handlers[t]
                break
              }
            }
            if (e) {
              return e.handleAuthentication(this, s, r)
            } else {
              return l
            }
          }
          let t = this._maxRedirects
          while (c.indexOf(l.message.statusCode) != -1 && this._allowRedirects && t > 0) {
            const i = l.message.headers['location']
            if (!i) {
              break
            }
            let a = new URL(i)
            if (o.protocol == 'https:' && o.protocol != a.protocol && !this._allowRedirectDowngrade) {
              throw new Error(
                'Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.'
              )
            }
            await l.readBody()
            if (a.hostname !== o.hostname) {
              for (let e in n) {
                if (e.toLowerCase() === 'authorization') {
                  delete n[e]
                }
              }
            }
            s = this._prepareRequest(e, a, n)
            l = await this.requestRaw(s, r)
            t--
          }
          if (p.indexOf(l.message.statusCode) == -1) {
            return l
          }
          u += 1
          if (u < i) {
            await l.readBody()
            await this._performExponentialBackoff(u)
          }
        }
        return l
      }
      dispose() {
        if (this._agent) {
          this._agent.destroy()
        }
        this._disposed = true
      }
      requestRaw(e, t) {
        return new Promise((r, n) => {
          let callbackForResult = function (e, t) {
            if (e) {
              n(e)
            }
            r(t)
          }
          this.requestRawWithCallback(e, t, callbackForResult)
        })
      }
      requestRawWithCallback(e, t, r) {
        let n
        if (typeof t === 'string') {
          e.options.headers['Content-Length'] = Buffer.byteLength(t, 'utf8')
        }
        let o = false
        let handleResult = (e, t) => {
          if (!o) {
            o = true
            r(e, t)
          }
        }
        let s = e.httpModule.request(e.options, e => {
          let t = new HttpClientResponse(e)
          handleResult(null, t)
        })
        s.on('socket', e => {
          n = e
        })
        s.setTimeout(this._socketTimeout || 3 * 6e4, () => {
          if (n) {
            n.end()
          }
          handleResult(new Error('Request timeout: ' + e.options.path), null)
        })
        s.on('error', function (e) {
          handleResult(e, null)
        })
        if (t && typeof t === 'string') {
          s.write(t, 'utf8')
        }
        if (t && typeof t !== 'string') {
          t.on('close', function () {
            s.end()
          })
          t.pipe(s)
        } else {
          s.end()
        }
      }
      getAgent(e) {
        let t = new URL(e)
        return this._getAgent(t)
      }
      _prepareRequest(e, t, r) {
        const s = {}
        s.parsedUrl = t
        const i = s.parsedUrl.protocol === 'https:'
        s.httpModule = i ? o : n
        const a = i ? 443 : 80
        s.options = {}
        s.options.host = s.parsedUrl.hostname
        s.options.port = s.parsedUrl.port ? parseInt(s.parsedUrl.port) : a
        s.options.path = (s.parsedUrl.pathname || '') + (s.parsedUrl.search || '')
        s.options.method = e
        s.options.headers = this._mergeHeaders(r)
        if (this.userAgent != null) {
          s.options.headers['user-agent'] = this.userAgent
        }
        s.options.agent = this._getAgent(s.parsedUrl)
        if (this.handlers) {
          this.handlers.forEach(e => {
            e.prepareRequest(s.options)
          })
        }
        return s
      }
      _mergeHeaders(e) {
        const lowercaseKeys = e => Object.keys(e).reduce((t, r) => ((t[r.toLowerCase()] = e[r]), t), {})
        if (this.requestOptions && this.requestOptions.headers) {
          return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(e))
        }
        return lowercaseKeys(e || {})
      }
      _getExistingOrDefaultHeader(e, t, r) {
        const lowercaseKeys = e => Object.keys(e).reduce((t, r) => ((t[r.toLowerCase()] = e[r]), t), {})
        let n
        if (this.requestOptions && this.requestOptions.headers) {
          n = lowercaseKeys(this.requestOptions.headers)[t]
        }
        return e[t] || n || r
      }
      _getAgent(e) {
        let t
        let a = s.getProxyUrl(e)
        let u = a && a.hostname
        if (this._keepAlive && u) {
          t = this._proxyAgent
        }
        if (this._keepAlive && !u) {
          t = this._agent
        }
        if (!!t) {
          return t
        }
        const l = e.protocol === 'https:'
        let c = 100
        if (!!this.requestOptions) {
          c = this.requestOptions.maxSockets || n.globalAgent.maxSockets
        }
        if (u) {
          if (!i) {
            i = r(353)
          }
          const e = {
            maxSockets: c,
            keepAlive: this._keepAlive,
            proxy: {
              ...((a.username || a.password) && { proxyAuth: `${a.username}:${a.password}` }),
              host: a.hostname,
              port: a.port
            }
          }
          let n
          const o = a.protocol === 'https:'
          if (l) {
            n = o ? i.httpsOverHttps : i.httpsOverHttp
          } else {
            n = o ? i.httpOverHttps : i.httpOverHttp
          }
          t = n(e)
          this._proxyAgent = t
        }
        if (this._keepAlive && !t) {
          const e = { keepAlive: this._keepAlive, maxSockets: c }
          t = l ? new o.Agent(e) : new n.Agent(e)
          this._agent = t
        }
        if (!t) {
          t = l ? o.globalAgent : n.globalAgent
        }
        if (l && this._ignoreSslError) {
          t.options = Object.assign(t.options || {}, { rejectUnauthorized: false })
        }
        return t
      }
      _performExponentialBackoff(e) {
        e = Math.min(f, e)
        const t = h * Math.pow(2, e)
        return new Promise(e => setTimeout(() => e(), t))
      }
      static dateTimeDeserializer(e, t) {
        if (typeof t === 'string') {
          let e = new Date(t)
          if (!isNaN(e.valueOf())) {
            return e
          }
        }
        return t
      }
      async _processResponse(e, t) {
        return new Promise(async (r, n) => {
          const o = e.message.statusCode
          const s = { statusCode: o, result: null, headers: {} }
          if (o == a.NotFound) {
            r(s)
          }
          let i
          let u
          try {
            u = await e.readBody()
            if (u && u.length > 0) {
              if (t && t.deserializeDates) {
                i = JSON.parse(u, HttpClient.dateTimeDeserializer)
              } else {
                i = JSON.parse(u)
              }
              s.result = i
            }
            s.headers = e.message.headers
          } catch (e) {}
          if (o > 299) {
            let e
            if (i && i.message) {
              e = i.message
            } else if (u && u.length > 0) {
              e = u
            } else {
              e = 'Failed request: (' + o + ')'
            }
            let t = new HttpClientError(e, o)
            t.result = s.result
            n(t)
          } else {
            r(s)
          }
        })
      }
    }
    t.HttpClient = HttpClient
  },
  502: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true })
    function getProxyUrl(e) {
      let t = e.protocol === 'https:'
      let r
      if (checkBypass(e)) {
        return r
      }
      let n
      if (t) {
        n = process.env['https_proxy'] || process.env['HTTPS_PROXY']
      } else {
        n = process.env['http_proxy'] || process.env['HTTP_PROXY']
      }
      if (n) {
        r = new URL(n)
      }
      return r
    }
    t.getProxyUrl = getProxyUrl
    function checkBypass(e) {
      if (!e.hostname) {
        return false
      }
      let t = process.env['no_proxy'] || process.env['NO_PROXY'] || ''
      if (!t) {
        return false
      }
      let r
      if (e.port) {
        r = Number(e.port)
      } else if (e.protocol === 'http:') {
        r = 80
      } else if (e.protocol === 'https:') {
        r = 443
      }
      let n = [e.hostname.toUpperCase()]
      if (typeof r === 'number') {
        n.push(`${n[0]}:${r}`)
      }
      for (let e of t
        .split(',')
        .map(e => e.trim().toUpperCase())
        .filter(e => e)) {
        if (n.some(t => t === e)) {
          return true
        }
      }
      return false
    }
    t.checkBypass = checkBypass
  },
  353: (e, t, r) => {
    e.exports = r(21)
  },
  21: (e, t, r) => {
    var n = r(808)
    var o = r(404)
    var s = r(685)
    var i = r(687)
    var a = r(361)
    var u = r(491)
    var l = r(837)
    t.httpOverHttp = httpOverHttp
    t.httpsOverHttp = httpsOverHttp
    t.httpOverHttps = httpOverHttps
    t.httpsOverHttps = httpsOverHttps
    function httpOverHttp(e) {
      var t = new TunnelingAgent(e)
      t.request = s.request
      return t
    }
    function httpsOverHttp(e) {
      var t = new TunnelingAgent(e)
      t.request = s.request
      t.createSocket = createSecureSocket
      t.defaultPort = 443
      return t
    }
    function httpOverHttps(e) {
      var t = new TunnelingAgent(e)
      t.request = i.request
      return t
    }
    function httpsOverHttps(e) {
      var t = new TunnelingAgent(e)
      t.request = i.request
      t.createSocket = createSecureSocket
      t.defaultPort = 443
      return t
    }
    function TunnelingAgent(e) {
      var t = this
      t.options = e || {}
      t.proxyOptions = t.options.proxy || {}
      t.maxSockets = t.options.maxSockets || s.Agent.defaultMaxSockets
      t.requests = []
      t.sockets = []
      t.on('free', function onFree(e, r, n, o) {
        var s = toOptions(r, n, o)
        for (var i = 0, a = t.requests.length; i < a; ++i) {
          var u = t.requests[i]
          if (u.host === s.host && u.port === s.port) {
            t.requests.splice(i, 1)
            u.request.onSocket(e)
            return
          }
        }
        e.destroy()
        t.removeSocket(e)
      })
    }
    l.inherits(TunnelingAgent, a.EventEmitter)
    TunnelingAgent.prototype.addRequest = function addRequest(e, t, r, n) {
      var o = this
      var s = mergeOptions({ request: e }, o.options, toOptions(t, r, n))
      if (o.sockets.length >= this.maxSockets) {
        o.requests.push(s)
        return
      }
      o.createSocket(s, function (t) {
        t.on('free', onFree)
        t.on('close', onCloseOrRemove)
        t.on('agentRemove', onCloseOrRemove)
        e.onSocket(t)
        function onFree() {
          o.emit('free', t, s)
        }
        function onCloseOrRemove(e) {
          o.removeSocket(t)
          t.removeListener('free', onFree)
          t.removeListener('close', onCloseOrRemove)
          t.removeListener('agentRemove', onCloseOrRemove)
        }
      })
    }
    TunnelingAgent.prototype.createSocket = function createSocket(e, t) {
      var r = this
      var n = {}
      r.sockets.push(n)
      var o = mergeOptions({}, r.proxyOptions, {
        method: 'CONNECT',
        path: e.host + ':' + e.port,
        agent: false,
        headers: { host: e.host + ':' + e.port }
      })
      if (e.localAddress) {
        o.localAddress = e.localAddress
      }
      if (o.proxyAuth) {
        o.headers = o.headers || {}
        o.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(o.proxyAuth).toString('base64')
      }
      c('making CONNECT request')
      var s = r.request(o)
      s.useChunkedEncodingByDefault = false
      s.once('response', onResponse)
      s.once('upgrade', onUpgrade)
      s.once('connect', onConnect)
      s.once('error', onError)
      s.end()
      function onResponse(e) {
        e.upgrade = true
      }
      function onUpgrade(e, t, r) {
        process.nextTick(function () {
          onConnect(e, t, r)
        })
      }
      function onConnect(o, i, a) {
        s.removeAllListeners()
        i.removeAllListeners()
        if (o.statusCode !== 200) {
          c('tunneling socket could not be established, statusCode=%d', o.statusCode)
          i.destroy()
          var u = new Error('tunneling socket could not be established, ' + 'statusCode=' + o.statusCode)
          u.code = 'ECONNRESET'
          e.request.emit('error', u)
          r.removeSocket(n)
          return
        }
        if (a.length > 0) {
          c('got illegal response body from proxy')
          i.destroy()
          var u = new Error('got illegal response body from proxy')
          u.code = 'ECONNRESET'
          e.request.emit('error', u)
          r.removeSocket(n)
          return
        }
        c('tunneling connection has established')
        r.sockets[r.sockets.indexOf(n)] = i
        return t(i)
      }
      function onError(t) {
        s.removeAllListeners()
        c('tunneling socket could not be established, cause=%s\n', t.message, t.stack)
        var o = new Error('tunneling socket could not be established, ' + 'cause=' + t.message)
        o.code = 'ECONNRESET'
        e.request.emit('error', o)
        r.removeSocket(n)
      }
    }
    TunnelingAgent.prototype.removeSocket = function removeSocket(e) {
      var t = this.sockets.indexOf(e)
      if (t === -1) {
        return
      }
      this.sockets.splice(t, 1)
      var r = this.requests.shift()
      if (r) {
        this.createSocket(r, function (e) {
          r.request.onSocket(e)
        })
      }
    }
    function createSecureSocket(e, t) {
      var r = this
      TunnelingAgent.prototype.createSocket.call(r, e, function (n) {
        var s = e.request.getHeader('host')
        var i = mergeOptions({}, r.options, { socket: n, servername: s ? s.replace(/:.*$/, '') : e.host })
        var a = o.connect(0, i)
        r.sockets[r.sockets.indexOf(n)] = a
        t(a)
      })
    }
    function toOptions(e, t, r) {
      if (typeof e === 'string') {
        return { host: e, port: t, localAddress: r }
      }
      return e
    }
    function mergeOptions(e) {
      for (var t = 1, r = arguments.length; t < r; ++t) {
        var n = arguments[t]
        if (typeof n === 'object') {
          var o = Object.keys(n)
          for (var s = 0, i = o.length; s < i; ++s) {
            var a = o[s]
            if (n[a] !== undefined) {
              e[a] = n[a]
            }
          }
        }
      }
      return e
    }
    var c
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      c = function () {
        var e = Array.prototype.slice.call(arguments)
        if (typeof e[0] === 'string') {
          e[0] = 'TUNNEL: ' + e[0]
        } else {
          e.unshift('TUNNEL:')
        }
        console.error.apply(console, e)
      }
    } else {
      c = function () {}
    }
    t.debug = c
  },
  491: t => {
    t.exports = e(import.meta.url)('assert')
  },
  361: t => {
    t.exports = e(import.meta.url)('events')
  },
  147: t => {
    t.exports = e(import.meta.url)('fs')
  },
  685: t => {
    t.exports = e(import.meta.url)('http')
  },
  687: t => {
    t.exports = e(import.meta.url)('https')
  },
  808: t => {
    t.exports = e(import.meta.url)('net')
  },
  37: t => {
    t.exports = e(import.meta.url)('os')
  },
  17: t => {
    t.exports = e(import.meta.url)('path')
  },
  404: t => {
    t.exports = e(import.meta.url)('tls')
  },
  837: t => {
    t.exports = e(import.meta.url)('util')
  }
}
var r = {}
function __nccwpck_require__(e) {
  var n = r[e]
  if (n !== undefined) {
    return n.exports
  }
  var o = (r[e] = { exports: {} })
  var s = true
  try {
    t[e].call(o.exports, o, o.exports, __nccwpck_require__)
    s = false
  } finally {
    if (s) delete r[e]
  }
  return o.exports
}
;(() => {
  __nccwpck_require__.n = e => {
    var t = e && e.__esModule ? () => e['default'] : () => e
    __nccwpck_require__.d(t, { a: t })
    return t
  }
})()
;(() => {
  __nccwpck_require__.d = (e, t) => {
    for (var r in t) {
      if (__nccwpck_require__.o(t, r) && !__nccwpck_require__.o(e, r)) {
        Object.defineProperty(e, r, { enumerable: true, get: t[r] })
      }
    }
  }
})()
;(() => {
  __nccwpck_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
})()
if (typeof __nccwpck_require__ !== 'undefined')
  __nccwpck_require__.ab =
    new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + '/'
var n = {}
;(() => {
  var e = __nccwpck_require__(147)
  var t = __nccwpck_require__.n(e)
  var r = __nccwpck_require__(31)
  var n = __nccwpck_require__.n(r)
  const generateLevelColumn = e => (e === 'error' ? `:x: ${e}` : `:warning: ${e}`)
  const generateTable = t => {
    const n = (0, e.createWriteStream)('result-markdown.md')
    const o = (0, r.getInput)('report-url')
    n.write(`${o}\n`)
    if (t === []) {
      n.write('success!')
      n.end('\n')
      return
    }
    n.write('|auditProperty|actual|expected|level|\n')
    n.write('|---|---|---|---|\n')
    for (const e of t) {
      n.write(`|${e['auditProperty']}|${e['actual']}|${e['expected']}|${generateLevelColumn(e['level'])}|\n`)
    }
    n.end('\n')
  }
  try {
    const t = (0, r.getInput)('json-file-path')
    const n = (0, e.readFileSync)(t)
    generateTable(JSON.parse(n.toString()))
    ;(0, r.setOutput)('success!', '')
  } catch (e) {
    console.log(e)
    ;(0, r.setFailed)(e)
  }
})()
