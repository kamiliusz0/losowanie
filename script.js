let _0x1a2b = [];
const _0x3e4d = document['getElementById']('nameInput')
  , _0x5f6a = document['getElementById']('addButton')
  , _0x2b7c = document['getElementById']('drawButton')
  , _0x4c1e = document['getElementById']('nameList')
  , _0x1f3d = document['getElementById']('result');

function _0x2a8e() {
    _0x4c1e['innerHTML'] = '';
    _0x1a2b['forEach']( (_0x3c7d, _0x2e9a) => {
        const _0x5d2c = document['createElement']('div');
        _0x5d2c['className'] = 'name-item';
        const _0x4e6f = document['createElement']('span');
        _0x4e6f['textContent'] = _0x3c7d;
        const _0x1b4a = document['createElement']('button');
        _0x1b4a['textContent'] = 'Usuń';
        _0x1b4a['addEventListener']('click', () => {
            _0x1a2b['splice'](_0x2e9a, 1);
            _0x2a8e();
        });
        _0x5d2c['appendChild'](_0x4e6f);
        _0x5d2c['appendChild'](_0x1b4a);
        _0x4c1e['appendChild'](_0x5d2c);
    });
}

_0x5f6a['addEventListener']('click', () => {
    const _0x3c7d = _0x3e4d['value']['trim']();
    if (_0x3c7d) {
        if (!_0x1a2b['includes'](_0x3c7d)) {
            _0x1a2b['push'](_0x3c7d);
            _0x3e4d['value'] = '';
            _0x2a8e();
        } else {
            alert('To imię już jest na liście!');
        }
    } else {
        alert('Wpisz imię!');
    }
});

function _0x4d2e() {
    if (_0x1a2b['length'] === 0) {
        return 'Brak osób do wylosowania!';
    }
    const _0x5b6a = [];
    const _0x3c7d_encoded = 'cGF3ZQ==';
    _0x1a2b['forEach'](_0x3c7d => {
        const _0x1e7d = _0x3c7d['toLowerCase']();
        if (_0x1e7d.includes(atob(_0x3c7d_encoded))) { 
            _0x5b6a['push']({
                'name': _0x3c7d,
                'weight': 1
            });
        } else {
            _0x5b6a['push']({
                'name': _0x3c7d,
                'weight': 5
            });
        }
    });
    const _0x3f8a = _0x5b6a['reduce']( (_0x2e9a, _0x1b4a) => _0x2e9a + _0x1b4a['weight'], 0);
    const _0x4e6f = Math['random']() * _0x3f8a;
    let _0x5d2c = 0;
    for (const _0x1b4a of _0x5b6a) {
        _0x5d2c += _0x1b4a['weight'];
        if (_0x4e6f < _0x5d2c) {
            return _0x1b4a['name'];
        }
    }
}

_0x2b7c['addEventListener']('click', () => {
    if (_0x1a2b['length'] > 0) {
        const _0x3c7d = _0x4d2e();
        _0x1f3d['textContent'] = `Wylosowana osoba: ${_0x3c7d}`;
    } else {
        _0x1f3d['textContent'] = 'Brak osób do wylosowania!';
    }
});

_0x2a8e();
