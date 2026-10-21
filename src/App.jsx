import { useEffect, useState } from 'react';

const messages = [
  'نههه! هنوز قهررری؟ 🥺',
  'یه فرصت کوچولو بهم بدههه 💗',
  'آخه من بدون تووو؟ 😭',
  'بیا دیگه آشتی کنیممم 🙄',
  'قول میدم بغلت کنم! 🐰',
];

function Bunny({ happy, sad, celebrating }) {
  return (
    <svg
      className={`bunny ${happy ? 'bunny-happy' : ''} ${
        sad ? 'bunny-sad' : ''
      } ${celebrating ? 'bunny-celebrate' : ''}`}
      viewBox='0 0 240 250'
      role='img'
      aria-label='خرگوش کوچولوی بامزه'
    >
      <defs>
        <linearGradient id='fur' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stopColor='#ffffff' />
          <stop offset='100%' stopColor='#ffe0e9' />
        </linearGradient>

        <linearGradient id='heart' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='#ff80aa' />
          <stop offset='100%' stopColor='#f04480' />
        </linearGradient>
      </defs>

      {/* Ears */}
      <g stroke='#e99aaa' strokeWidth='2.5'>
        <ellipse
          cx='83'
          cy='64'
          rx='24'
          ry='54'
          transform='rotate(-16 83 64)'
          fill='url(#fur)'
        />
        <ellipse
          cx='157'
          cy='64'
          rx='24'
          ry='54'
          transform='rotate(16 157 64)'
          fill='url(#fur)'
        />

        <ellipse
          cx='83'
          cy='65'
          rx='12'
          ry='38'
          transform='rotate(-16 83 65)'
          fill='#ffc1d3'
          stroke='none'
        />
        <ellipse
          cx='157'
          cy='65'
          rx='12'
          ry='38'
          transform='rotate(16 157 65)'
          fill='#ffc1d3'
          stroke='none'
        />
      </g>

      {/* Body */}
      <ellipse
        cx='120'
        cy='193'
        rx='59'
        ry='45'
        fill='url(#fur)'
        stroke='#e99aaa'
        strokeWidth='2.5'
      />

      {/* Head */}
      <ellipse
        cx='120'
        cy='131'
        rx='78'
        ry='70'
        fill='url(#fur)'
        stroke='#e99aaa'
        strokeWidth='2.5'
      />

      {/* Cheeks */}
      <ellipse cx='70' cy='146' rx='15' ry='10' fill='#ffb4c9' />
      <ellipse cx='170' cy='146' rx='15' ry='10' fill='#ffb4c9' />

      {/* Eyes */}
      {sad ? (
        <g fill='none' stroke='#633347' strokeWidth='4' strokeLinecap='round'>
          <path d='M83 119 Q91 110 99 119' />
          <path d='M141 119 Q149 110 157 119' />
        </g>
      ) : (
        <g fill='#633347'>
          <ellipse cx='91' cy='119' rx='7' ry='10' />
          <ellipse cx='149' cy='119' rx='7' ry='10' />
          <circle cx='93' cy='116' r='2.5' fill='#fff' />
          <circle cx='151' cy='116' r='2.5' fill='#fff' />
        </g>
      )}

      {/* Nose and mouth */}
      <path d='M114 132 Q120 126 126 132 Q120 139 114 132' fill='#ec7194' />

      {sad ? (
        <path
          d='M109 150 Q120 140 131 150'
          fill='none'
          stroke='#633347'
          strokeWidth='3'
          strokeLinecap='round'
        />
      ) : happy ? (
        <path
          d='M108 139 Q120 158 132 139'
          fill='#f27696'
          stroke='#633347'
          strokeWidth='2.5'
          strokeLinecap='round'
        />
      ) : (
        <path
          d='M120 137 Q116 145 110 141 M120 137 Q124 145 130 141'
          fill='none'
          stroke='#633347'
          strokeWidth='2.5'
          strokeLinecap='round'
        />
      )}

      {/* Paws */}
      <ellipse
        cx='88'
        cy='192'
        rx='19'
        ry='15'
        fill='#fff7f9'
        stroke='#e99aaa'
        strokeWidth='2'
      />
      <ellipse
        cx='152'
        cy='192'
        rx='19'
        ry='15'
        fill='#fff7f9'
        stroke='#e99aaa'
        strokeWidth='2'
      />

      {/* Heart */}
      <path
        d='M120 193 C112 185 91 172 98 160 C104 149 116 155 120 164 C127 151 140 152 145 162 C151 175 131 188 120 193Z'
        fill='url(#heart)'
        stroke='#e84b80'
        strokeWidth='2'
      />

      {celebrating && (
        <g className='svg-sparkles' fill='#ff75a1'>
          <path d='M32 78 L37 91 L50 96 L37 101 L32 114 L27 101 L14 96 L27 91Z' />
          <path d='M203 81 L207 91 L217 95 L207 99 L203 109 L199 99 L189 95 L199 91Z' />
          <path d='M48 154 L52 164 L62 168 L52 172 L48 182 L44 172 L34 168 L44 164Z' />
          <path d='M190 147 L194 157 L204 161 L194 165 L190 175 L186 165 L176 161 L186 157Z' />
        </g>
      )}
    </svg>
  );
}
function BunnyCouple() {
  return (
    <div
      className='bunny-couple'
      role='img'
      aria-label='دو خرگوش بامزه در حال بغل کردن هم'
    >
      <span className='couple-heart'>♥</span>

      <svg viewBox='0 0 280 240' aria-hidden='true'>
        <defs>
          <linearGradient id='girlFur' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0%' stopColor='#fff' />
            <stop offset='100%' stopColor='#ffe0eb' />
          </linearGradient>
          <linearGradient id='boyFur' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0%' stopColor='#fff5f5' />
            <stop offset='100%' stopColor='#e8d4d9' />
          </linearGradient>
        </defs>

        {/* خرگوش پسر */}
        <g stroke='#c78396' strokeWidth='2.5' strokeLinejoin='round'>
          <ellipse
            cx='165'
            cy='66'
            rx='20'
            ry='49'
            transform='rotate(13 165 66)'
            fill='url(#boyFur)'
          />
          <ellipse
            cx='217'
            cy='75'
            rx='20'
            ry='40'
            transform='rotate(35 217 75)'
            fill='url(#boyFur)'
          />
          <ellipse
            cx='165'
            cy='68'
            rx='10'
            ry='31'
            fill='#ffc7d7'
            stroke='none'
          />
          <ellipse
            cx='216'
            cy='77'
            rx='10'
            ry='25'
            transform='rotate(35 216 77)'
            fill='#ffc7d7'
            stroke='none'
          />
          <ellipse cx='190' cy='174' rx='43' ry='52' fill='url(#boyFur)' />
          <circle cx='180' cy='112' r='53' fill='url(#boyFur)' />
          <ellipse
            cx='144'
            cy='130'
            rx='10'
            ry='7'
            fill='#ffb8ca'
            stroke='none'
          />
          <ellipse
            cx='214'
            cy='130'
            rx='10'
            ry='7'
            fill='#ffb8ca'
            stroke='none'
          />
          <path
            d='M165 111 Q170 103 175 111'
            fill='none'
            stroke='#673c4d'
            strokeWidth='4'
            strokeLinecap='round'
          />
          <path
            d='M190 111 Q195 103 200 111'
            fill='none'
            stroke='#673c4d'
            strokeWidth='4'
            strokeLinecap='round'
          />
          <path
            d='M179 121 Q185 127 191 121'
            fill='none'
            stroke='#673c4d'
            strokeWidth='2.5'
          />
          <path
            d='M169 169 Q147 148 156 139 Q165 133 179 151 Q192 133 203 140 Q214 150 190 169Z'
            fill='#9da8ff'
            stroke='#7885db'
          />
          <ellipse cx='162' cy='209' rx='23' ry='12' fill='#fff' />
          <ellipse cx='211' cy='209' rx='23' ry='12' fill='#fff' />
        </g>

        {/* خرگوش دختر */}
        <g stroke='#e18ca6' strokeWidth='2.5' strokeLinejoin='round'>
          <ellipse
            cx='80'
            cy='63'
            rx='20'
            ry='46'
            transform='rotate(-23 80 63)'
            fill='url(#girlFur)'
          />
          <ellipse
            cx='119'
            cy='54'
            rx='19'
            ry='45'
            transform='rotate(-4 119 54)'
            fill='url(#girlFur)'
          />
          <ellipse
            cx='80'
            cy='63'
            rx='10'
            ry='30'
            transform='rotate(-23 80 63)'
            fill='#ffc7d7'
            stroke='none'
          />
          <ellipse
            cx='119'
            cy='54'
            rx='10'
            ry='29'
            fill='#ffc7d7'
            stroke='none'
          />
          <ellipse cx='91' cy='177' rx='43' ry='49' fill='url(#girlFur)' />
          <circle cx='94' cy='119' r='52' fill='url(#girlFur)' />
          <ellipse
            cx='58'
            cy='137'
            rx='10'
            ry='7'
            fill='#ffb8ca'
            stroke='none'
          />
          <ellipse
            cx='128'
            cy='137'
            rx='10'
            ry='7'
            fill='#ffb8ca'
            stroke='none'
          />
          <path
            d='M77 116 Q83 106 89 116'
            fill='none'
            stroke='#673c4d'
            strokeWidth='4'
            strokeLinecap='round'
          />
          <path
            d='M102 116 Q108 106 114 116'
            fill='none'
            stroke='#673c4d'
            strokeWidth='4'
            strokeLinecap='round'
          />
          <path
            d='M90 126 Q95 131 100 126'
            fill='none'
            stroke='#673c4d'
            strokeWidth='2.5'
          />
          <path
            d='M89 169 Q73 149 82 141 Q91 136 100 151 Q112 137 121 144 Q130 154 105 169Z'
            fill='#ff82ab'
            stroke='#e65c91'
          />
          <ellipse cx='66' cy='210' rx='22' ry='12' fill='#fff' />
          <ellipse cx='111' cy='210' rx='22' ry='12' fill='#fff' />
          {/* پاپیون */}
          <path d='M74 79 L56 68 Q49 81 65 89 L78 84Z' fill='#ff82ab' />
          <path d='M78 81 L90 62 Q102 70 90 83 L80 87Z' fill='#ff82ab' />
          <circle cx='77' cy='80' r='6' fill='#ffb3cc' />
        </g>

        {/* دست‌های در آغوش گرفتن */}
        <path
          d='M118 168 Q147 187 164 160'
          fill='none'
          stroke='#ffe0eb'
          strokeWidth='16'
          strokeLinecap='round'
        />
        <path
          d='M118 168 Q147 187 164 160'
          fill='none'
          stroke='#eaa0b5'
          strokeWidth='2.5'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
}
function FloatingHearts() {
  return (
    <div className='floating-hearts' aria-hidden='true'>
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} className={`floating-heart heart-${i + 1}`}>
          {i % 3 === 0 ? '♥' : '♡'}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [forgiven, setForgiven] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState(null);
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const keepButtonVisible = () => {
      setNoPosition((position) => {
        if (!position) return null;

        return {
          x: Math.max(16, Math.min(position.x, window.innerWidth - 141)),
          y: Math.max(16, Math.min(position.y, window.innerHeight - 70)),
        };
      });
    };

    window.addEventListener('resize', keepButtonVisible);

    return () => {
      window.removeEventListener('resize', keepButtonVisible);
    };
  }, []);

  const handleNo = () => {
    if (forgiven) return;

    setNoCount((count) => count + 1);
    setShowNote(true);

    const buttonWidth = 125;
    const buttonHeight = 54;
    const padding = 16;

    const maxX = Math.max(padding, window.innerWidth - buttonWidth - padding);

    const maxY = Math.max(padding, window.innerHeight - buttonHeight - padding);

    const currentX = noPosition?.x ?? window.innerWidth / 2;
    const currentY = noPosition?.y ?? window.innerHeight * 0.7;

    let x;
    let y;
    let attempts = 0;

    do {
      x = padding + Math.random() * (maxX - padding);
      y = padding + Math.random() * (maxY - padding);
      attempts++;
    } while (attempts < 20 && Math.hypot(x - currentX, y - currentY) < 140);

    setNoPosition({
      x: Math.min(x, window.innerWidth - buttonWidth - padding),
      y: Math.min(y, window.innerHeight - buttonHeight - padding),
    });
  };

  const handleYes = () => {
    setForgiven(true);
    setNoPosition(null);
    setShowNote(false);
  };

  return (
    <main className={`app ${forgiven ? 'app-happy' : ''}`}>
      <FloatingHearts />

      <div className='cloud cloud-left' aria-hidden='true' />
      <div className='cloud cloud-right' aria-hidden='true' />

      <section className='content' aria-live='polite'>
        <div className='top-decoration'>
          <span>♡</span>
          <span>✦</span>
          <span>♡</span>
        </div>

        <div className='character'>
          <div className='character-glow' />
          {forgiven ? (
            <BunnyCouple />
          ) : (
            <Bunny happy={false} sad={showNote} celebrating={false} />
          )}
        </div>

        {!forgiven ? (
          <>
            <div className='intro'>
              <span className='eyebrow'>یه پیام از ته دل 💌</span>

              <h1>کوچولوی بابا، باهام آشتی؟</h1>

              <p className='subtitle'>
                ببخشید که ناراحتت کردم...
                <br />
                دوست ندارم ازم دلخور باشی 🥺
              </p>
            </div>

            <div className='actions'>
              <button className='button button-yes' onClick={handleYes}>
                آرههه 💗
              </button>

              {!noPosition && (
                <button
                  className='button button-no'
                  //   onPointerEnter={(event) => {
                  //     if (event.pointerType === 'mouse') {
                  //       handleNo();
                  //     }
                  //   }}
                  //   onTouchStart={(event) => {
                  //     event.preventDefault();
                  //     handleNo();
                  //   }}
                  onClick={handleNo}
                >
                  نه 🙈
                </button>
              )}
            </div>

            {noPosition && (
              <button
                className='button button-no button-running'
                style={{
                  left: noPosition.x,
                  top: noPosition.y,
                }}
                // onPointerEnter={(event) => {
                //   if (event.pointerType === 'mouse') {
                //     handleNo();
                //   }
                // }}
                // onTouchStart={(event) => {
                //   event.preventDefault();
                //   handleNo();
                // }}
                onClick={handleNo}
              >
                نههه 🙈
              </button>
            )}

            {showNote && (
              <div key={noCount} className='reaction'>
                {messages[(noCount - 1) % messages.length]}
              </div>
            )}

            <p className='footer-note'>ساخته شده با کلی عشق برای تو 💕</p>
          </>
        ) : (
          <div className='success-message'>
            <span className='success-kicker'>واااای باورم نمیشه</span>

            <h1>آشتیییییی! 💖</h1>

            <p className='love-text'>
              عاشقتممممم!
              <br />
              مرسی که منو بخشیدی کوچولوی من 😬
            </p>

            <div className='love-stamp'>تو قشنگ‌ترین اتفاق منی ♡</div>

            <p className='footer-note'>خیلی خیلی دوستت دارم 💗</p>
          </div>
        )}
      </section>
    </main>
  );
}
