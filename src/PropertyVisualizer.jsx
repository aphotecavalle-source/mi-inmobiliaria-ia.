import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  MapPin, 
  User, 
  Image as ImageIcon, 
  Play, 
  ChevronRight, 
  Info,
  X,
  Hash,
  ArrowLeft
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = ({ alRegresar }) => {
  const [showFicha, setShowFicha] = useState(false);

  const brandConfig = {
    agentName: "REBECA QUINTANILLA",
    agentPhone: "525512345678",
