import React from 'react';
import type { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
  onSuggest: (deal: Deal) => void;
}

const DealCard: React.FC<DealCardProps> = ({ deal, onSuggest }) => (
  <div className="border rounded-xl p-4 shadow mb-4 bg-white">
    <h2 className="text-xl font-semibold">{deal.title}</h2>
    <p><strong>Company:</strong> {deal.company}</p>
    <p><strong>Contact:</strong> {deal.contact}</p>
    <p><strong>Stage:</strong> {deal.stage}</p>
    <p><strong>Value:</strong> ${deal.value}</p>
    <p><strong>Last Contacted:</strong> {deal.lastContacted}</p>
    <p className="text-gray-600 italic">"{deal.notes}"</p>
    <button
      onClick={() => onSuggest(deal)}
      className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Get AI Suggestion
    </button>
  </div>
);

export default DealCard;
