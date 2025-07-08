"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Music } from "lucide-react"

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showActivateButton, setShowActivateButton] = useState(true)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Define volume inicial
    audio.volume = 0.2

    audio.addEventListener("ended", () => setIsPlaying(false))

    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  // Tenta autoplay imediatamente quando carrega
  useEffect(() => {
    const tryAutoplay = async () => {
      const audio = audioRef.current
      if (!audio) return

      try {
        // Tenta tocar imediatamente
        await audio.play()
        setIsPlaying(true)
        setUserInteracted(true)
        setShowActivateButton(false)
        console.log("Autoplay funcionou!")
      } catch (error) {
        console.log("Autoplay bloqueado, aguardando interação:", error)
        // Se falhar, mantém o sistema de interação
      }
    }

    // Tenta autoplay quando o áudio carrega
    const audio = audioRef.current
    if (audio) {
      if (audio.readyState >= 2) {
        tryAutoplay()
      } else {
        audio.addEventListener("canplay", tryAutoplay, { once: true })
      }
    }
  }, [])

  // Listener global para primeira interação - MELHORADO
  useEffect(() => {
    const handleFirstInteraction = (e) => {
      if (!userInteracted) {
        console.log("Primeira interação detectada:", e.type)
        activateMusic()
      }
    }

    // Mais eventos para capturar interação mais rapidamente
    const events = ["click", "touchstart", "keydown", "scroll", "mousemove", "touchmove", "mousedown", "pointerdown"]

    events.forEach((event) => {
      document.addEventListener(event, handleFirstInteraction, {
        once: true,
        passive: true,
        capture: true,
      })
    })

    // Também tenta ativar após um pequeno delay se o usuário estiver na página
    const fallbackTimer = setTimeout(() => {
      if (!userInteracted && document.hasFocus()) {
        console.log("Ativação por fallback timer")
        activateMusic()
      }
    }, 1000) // 1 segundo

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction, { capture: true })
      })
      clearTimeout(fallbackTimer)
    }
  }, [userInteracted])

  // Função para ativar música na primeira interação
  const activateMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      await audio.play()
      setIsPlaying(true)
      setUserInteracted(true)
      setShowActivateButton(false)
      console.log("Música ativada com sucesso!")
    } catch (error) {
      console.log("Erro ao ativar música:", error)
    }
  }

  // Função para alternar play/pause
  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
        setUserInteracted(true)
        setShowActivateButton(false)
      }
    } catch (error) {
      console.log("Erro ao reproduzir áudio:", error)
    }
  }

  return (
    <>
      {/* Áudio elemento */}
      <audio ref={audioRef} loop preload="auto" crossOrigin="anonymous">
        <source src="/audio/background.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      {/* 
        🎨 BOTÃO DE ATIVAÇÃO INICIAL 
        Só aparece se autoplay falhar
      */}
      {showActivateButton && !userInteracted && (
        <div className="fixed top-20 right-4 z-[10000] bg-green-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center gap-2 text-sm">
            <Music className="h-4 w-4" />
            <span>Clique para ativar música de fundo</span>
            <Button onClick={activateMusic} size="sm" variant="secondary" className="h-6 px-2 text-xs">
              ▶ Ativar
            </Button>
          </div>
        </div>
      )}

      {/* 
        🎵 PLAYER COM EFEITO DE BARRAS DE VOLUME
      */}
      <div
        className="fixed top-4 right-4 z-[9999] flex items-center gap-3"
        style={{ position: "fixed", top: "16px", right: "16px", zIndex: 9999 }}
      >
        {/* 
          🎚️ BARRAS DE VOLUME ANIMADAS (SÓ APARECEM QUANDO TOCANDO)
          Efeito visual de equalizer do lado esquerdo do botão
        */}
        {isPlaying && (
          <div className="flex items-end gap-1 h-12">
            {/* Barra 1 */}
            <div
              className="w-1 bg-green-500 rounded-full animate-pulse"
              style={{
                height: "20px",
                animation: "bounce1 0.8s ease-in-out infinite alternate",
              }}
            ></div>
            {/* Barra 2 */}
            <div
              className="w-1 bg-green-400 rounded-full"
              style={{
                height: "30px",
                animation: "bounce2 0.6s ease-in-out infinite alternate",
              }}
            ></div>
            {/* Barra 3 */}
            <div
              className="w-1 bg-green-500 rounded-full"
              style={{
                height: "25px",
                animation: "bounce3 0.7s ease-in-out infinite alternate",
              }}
            ></div>
            {/* Barra 4 */}
            <div
              className="w-1 bg-green-300 rounded-full"
              style={{
                height: "35px",
                animation: "bounce4 0.5s ease-in-out infinite alternate",
              }}
            ></div>
            {/* Barra 5 */}
            <div
              className="w-1 bg-green-500 rounded-full"
              style={{
                height: "15px",
                animation: "bounce5 0.9s ease-in-out infinite alternate",
              }}
            ></div>
          </div>
        )}

        {/* 
          🎮 BOTÃO PLAY/PAUSE
          Fundo: bg-black/80 (preto com 80% opacidade)
          Tamanho: h-12 w-12 (48px x 48px)
          Tooltip: title="Hino de Duran - Chico Buarque"
        */}
        <Button
          onClick={togglePlay}
          size="icon"
          title="Hino de Duran - Chico Buarque"
          className="h-12 w-12 rounded-full bg-black/70 hover:bg-black/80 text-white shadow-lg transition-all duration-200 hover:scale-105 relative"
        >
          {/* 
            ▶️ ÍCONES PLAY/PAUSE 
          */}
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}

          {/* 
            🟢 INDICADOR DE MÚSICA TOCANDO 
          */}
          {isPlaying && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          )}
        </Button>
      </div>

      {/* 
        🎨 CSS ANIMATIONS PARA AS BARRAS DE VOLUME
        Cada barra tem uma animação diferente para criar efeito de equalizer
      */}
      <style jsx>{`
        @keyframes bounce1 {
          0% { height: 15px; }
          100% { height: 25px; }
        }
        @keyframes bounce2 {
          0% { height: 20px; }
          100% { height: 35px; }
        }
        @keyframes bounce3 {
          0% { height: 18px; }
          100% { height: 30px; }
        }
        @keyframes bounce4 {
          0% { height: 25px; }
          100% { height: 40px; }
        }
        @keyframes bounce5 {
          0% { height: 10px; }
          100% { height: 20px; }
        }
      `}</style>
    </>
  )
}

export default MusicPlayer
