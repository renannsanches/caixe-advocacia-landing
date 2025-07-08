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

  // Listener global para primeira interação - APENAS INTERAÇÕES FORTES
  useEffect(() => {
    const handleFirstInteraction = (e) => {
      if (!userInteracted) {
        console.log("Primeira interação FORTE detectada:", e.type)
        activateMusic()
      }
    }

    // APENAS eventos de interação que navegadores respeitam para autoplay
    const events = ["click", "touchstart", "keydown", "pointerdown"]

    events.forEach((event) => {
      document.addEventListener(event, handleFirstInteraction, {
        once: true,
        passive: true,
        capture: true,
      })
    })

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction, { capture: true })
      })
    }
  }, [userInteracted])

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
        Aparece até o usuário fazer uma interação forte (click, touch, key)
      */}
      {showActivateButton && !userInteracted && (
        <div className="fixed top-20 right-4 z-[10000] bg-green-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center gap-2 text-sm">
            <Music className="h-4 w-4" />
            <span>Clique em qualquer lugar para ativar música</span>
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
            {/* Barra 1 - Animação lenta */}
            <div className="w-1 bg-green-500 rounded-full animate-pulse h-5"></div>

            {/* Barra 2 - Animação média */}
            <div className="w-1 bg-green-400 rounded-full animate-bounce h-7"></div>

            {/* Barra 3 - Animação rápida */}
            <div className="w-1 bg-green-500 rounded-full animate-pulse h-6" style={{ animationDelay: "0.2s" }}></div>

            {/* Barra 4 - Animação média */}
            <div className="w-1 bg-green-300 rounded-full animate-bounce h-8" style={{ animationDelay: "0.1s" }}></div>

            {/* Barra 5 - Animação lenta */}
            <div className="w-1 bg-green-500 rounded-full animate-pulse h-4" style={{ animationDelay: "0.3s" }}></div>
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
          className="h-12 w-12 rounded-full bg-black/80 hover:bg-black/90 text-white shadow-lg transition-all duration-200 hover:scale-105 relative"
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
    </>
  )
}

export default MusicPlayer
